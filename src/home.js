import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";

 function HomePage(){
return(
    <>
    <Header/>
  
      <img
        height={350}
        width={1550}
        src="https://ehubelectronics.netlify.app/assets/images/bannerimg2.png"
        style={{
          boxSizing: "border-box",
          verticalAlign: "middle",
          listStyleType: "none",
          listStyle: "outside none none",
        }}
      />
      <Footer/>
     

    </>
    );
};
export default HomePage();