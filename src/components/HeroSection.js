import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Imagine what you can achieve</h1>
      <p>Without the financial stress</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Let us show you how
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
