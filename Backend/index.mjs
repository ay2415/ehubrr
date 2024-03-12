import express from "express";
const app = express();

import admin from "firebase-admin";
import serviceAccount from "/Backend FNL/serviceAccount.mjs"; 
import bcrypt from "bcrypt";
import cors from 'cors';
// import nodemailer from "nodemailer"
const firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

   app.use(express.json());

   app.use(express.urlencoded({extended: true}));

   const db = firebaseApp.firestore();
   
   app.use(cors());

   // Check if email already exists
const isEmailExists = async (email) => {
    const emailQuery = await db.collection('users').where('email', '==', email).get();
    return !emailQuery.empty;
};

// Check if contact number (phone number) already exists
const isContactNumberExists = async (contactNumber) => {
    const contactNumberQuery = await db.collection('users').where('contactNumber', '==', contactNumber).get();
    return !contactNumberQuery.empty;
    }

//register endpoint.
app.post('/register', async (req, res) =>{
    try{
        console.log("entered register")
        
        // Extract the required fields from the request body
        const { email, name, contactNumber, password } = req.body;

        // Validate contact number length
        if (contactNumber.length > 10) {
            return res.status(400).json({ message: 'Contact number should not exceed 10 digits' });
        }
        // Check if email already exists
         const emailExists = await isEmailExists(email);
         if (emailExists) {
             return res.status(400).json({ message: 'Email already exists' });
         }
         
        // Check if contact number already exists
        const contactNumberExists = await isContactNumberExists(contactNumber);
        if (contactNumberExists) {
            return res.status(400).json({ message: 'Contact number already exists' });
        }

        // Generate a salt
        const salt = await bcrypt.genSalt(10);
    

        // convert into hashpassword 
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // Create a user object with the extracted fields
        const userJson = {
            email: email,
            name: name,
            contactNumber: contactNumber,
            password: hashedPassword
        };

        const response = await db.collection('users').doc(email).set(userJson);

        return res.status(200).json({ message: 'register successful'});
    } catch(error){
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
    }
})

//login endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Retrieve user from Firestore based on email
      const userRef = await db.collection('users').where('email', '==', email).limit(1).get();
  
      if (userRef.empty) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const userData = userRef.docs[0].data();
  
        // Check if the password matches by comparing the hashed  password
        const isPasswordMatch = await bcrypt.compare(password, userData.password);

        if (isPasswordMatch) {
            return res.status(200).json({ message: 'Login successful', user: userData });
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

   const PORT = process.env.PORT || 8000;
   app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}.`);
   });