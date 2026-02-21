import React from "react";

import Hero from "./Hero";
import Signup from "./Signup";
import Invest from "./Invest";
import Benifits from "./Benifits";
import Explore from "./Explore";
import Faq from "./Faq";

function Signuppage() {
  return (
    <>
      <Hero />
      <Signup
        imageURL="media/images/signup.png"
        productName="Signup now"
        productDescription1="Or track your existing application"
      />
      <Invest />
           <Benifits />
      <Explore />
      <Faq />
    </>
  );
}

export default Signuppage;
