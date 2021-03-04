import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.ico";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/products">Product Offerings</Link>
            <Link to="/travel">Terms and Privacy</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="https://www.facebook.com/delending">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <div class="social-media">
        <div class="footer-logo">
          <Link to="/" className="social-logo">
            DEL Finance
            <i class="img">
              <img src={logo} width="120" height="60" alt="dellogo"></img>
            </i>
          </Link>
        </div>
        <small class="website-rights">DEL Finance © 2021</small>
        <div class="social-icons">
          <Link
            class="social-icon-link facebook"
            to="https://www.facebook.com/delending"

            target="_blank"
            aria-label="Facebook"
          >
            <i class="fab fa-facebook-f" />
          </Link>
          <Link
            class="social-icon-link instagram"
            to="/"
            target="_blank"
            aria-label="Instagram"
          >
            <i class="fab fa-instagram" />
          </Link>
          <Link
            class="social-icon-link youtube"
            to="/"
            target="_blank"
            aria-label="Youtube"
          >
            <i class="fab fa-youtube" />
          </Link>
          <Link
            class="social-icon-link twitter"
            to="/"
            target="_blank"
            aria-label="Twitter"
          >
            <i class="fab fa-twitter" />
          </Link>
          <Link
            class="social-icon-link twitter"
            to="/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
