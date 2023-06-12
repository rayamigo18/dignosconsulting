import React from "react";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import OurTeam from "./OurTeam";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <AboutUs />
      <OurTeam />
      <ContactUs />
    </>
  );
}

export default Home;
