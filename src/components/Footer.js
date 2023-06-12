import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
//import logo from "../images/dignoslogo.ico";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/ourteam">Our Team</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a href="https://www.facebook.com/profile.php?id=100093307951705&mibextid=ZbWKwL">Facebook</a>
          </div>
        </div>  

      </div>
      <div class="social-media">
        <div class="footer-logo">
          <Link to="/" className="social-logo"> 
            Dignos Consulting
          </Link>
        </div>
        <small class="website-rights">© 2023</small>
        <div class="social-icons">
          <div class="social-icon-link facebook" aria-label="Facebook">
            <a href="https://www.facebook.com/delending"><i class="fab fa-facebook-f"></i></a>
          </div>
          
          </div>
          
        </div>
      </div>
    
  );
}

export default Footer;
