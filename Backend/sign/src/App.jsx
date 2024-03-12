import React, { useState } from "react";
import * as Components from './Components';

function App() {
    const [signIn, toggle] = useState(true);
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
});
    const [registerData, setRegisterData] = useState({
         email: '',
         name: '',
         contactNumber: '',
         password: '',
});

const [setRegisterError] = useState(false)
const [setError] = useState(false);
const [setRedirect] = useState(false);

const handleLogin = async () => {
    try {
      // Make a POST request to the login endpoint
      const response = await fetch('http://localhost:8000/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password,
        }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      console.log('Data:', data);
      if (data.success) {
        console.log('Login successful');
        alert('Login successful'); 
        setRedirect(true);

      } else {
        console.error('Login failed. Server response:', data);
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred during login.');
    }
  };

  const handleRegister = async () => {
    try {
        const response = await fetch('http://localhost:8000/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: registerData.email,
                name: registerData.name,
                contactNumber: registerData.contactNumber,
                password: registerData.password,
            }),
        });

        if (!response.ok) {
            throw new Error('Registration failed');
        }

        const data = await response.json();
        console.log('Data:', data);

        if (data.message === 'email already taken') {
          setRegisterError('This email is already taken. Please use another email.');
        } else if (data.message === 'register successful') {
          toggle(true);
        } else {
          console.error('Registration failed. Server response:', data);
          setRegisterError('An error occurred during registration.');
        }
    } catch (error) {
        console.error('Error:', error);
        setRegisterError('An error occurred during registration.');
    }
};
  
const handleChange = (e) => {
  setLoginData({
    ...loginData,
    [e.target.name]: e.target.value,
  });
};

const handleRegisterChange = (e) => {
  setRegisterData({
    ...registerData,
    [e.target.name]: e.target.value,
  });
};

     return (
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
    <Components.Form>
        <Components.Title>Create Account</Components.Title>
        <Components.Input
            type='email'
            placeholder='Email'
            name='email'
            value={registerData.email}
            onChange={handleRegisterChange}
            />
        <Components.Input
            type='text'
            placeholder='Name'
            name='name'
            value={registerData.name}
            onChange={handleRegisterChange}
            />
        <Components.Input
            type='tel'
            placeholder='Contact Number'
            name='contactNumber'
            value={registerData.contactNumber}
            onChange={handleRegisterChange}
        />
        <Components.Input
            type='password'
            placeholder='Password'
            name='password'
            value={registerData.password}
            onChange={handleRegisterChange}
        />
        <Components.Button onClick={handleRegister}>Sign Up</Components.Button>
    </Components.Form>
</Components.SignUpContainer>
             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Sign in</Components.Title>
                      <Components.Input
            type='email'
            placeholder='Email'
            name='email'
            value={loginData.email}
            onChange={handleChange}
          />
          <Components.Input
            type='password'
            placeholder='Password'
            name='password'
            value={loginData.password}
            onChange={handleChange}
          />
          <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
          <Components.Button onClick={handleLogin}>Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         To keep connected with us please login with your personal info
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Hello, Friend!</Components.Title>
                       <Components.Paragraph>
                           Enter Your personal details and start journey with us
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Sigin Up
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
     )
}

export default App;