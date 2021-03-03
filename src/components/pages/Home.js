import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Products from "./Products";
import ContactUs from "./ContactUs";
import Footer from "../Footer";
import AboutUs from "./AboutUs";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Products />
      <AboutUs />
      <ContactUs />
     
    </>
  );
}

export default Home;
