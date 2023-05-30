import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../images/dignoslogo.ico";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/products">Contact Us</Link>
            <Link to="/application">Services</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://www.facebook.com/delending">Facebook</a>
            <a href="https://twitter.com/home">Twitter</a>
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
          <div class="social-icon-link instagram" aria-label="Instagram">
            <a href="https://www.instagram.com/"><i class="fab fa-instagram" /></a>
          </div>
          </div>
          <div class="social-icon-link twitter" aria-label="Twitter">
            <a href="https://www.twitter.com/"><i class="fab fa-twitter" /></a>
          </div>
        </div>
      </div>
    
  );
}

export default Footer;
