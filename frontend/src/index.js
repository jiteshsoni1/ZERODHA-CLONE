import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Homepage from "./landingpage/home/Homepage";
import Signup from "./landingpage/signup/Signup";
import AboutPage from "./landingpage/about/Aboutpage";
import ProductPage from "./landingpage/products/Productpage";
import PricingPage from "./landingpage/pricing/Pricingpage";
import SupportPage from "./landingpage/support/Supportpage";
import Notfound from "./landingpage/Notfound";
import Navbar from "./landingpage/Navbar";
import Footer from "./landingpage/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
);
