import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import ContactUs from "./pages/ContactUs";

function Footer() {
  return (
    <div className="footer-container">
      <div class="some-page-wrapper">
        <h2>DEL Finance Contact Information</h2>
        <div class="info">
          <div>
            <i class="fas fa-map-marker-alt"></i> Melbourne Victoria
          </div>
          <div>
            <i class="fas fa-phone"></i>
            <a href="tel:+61466906189">0466906189</a>{" "}
          </div>
          <div>
            <i class="fas fa-envelope"></i>
            <a href="mailto:enquiries@delfinance.com.au">
              enquiries@delfinance.com.au
            </a>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="column">
            <div class="blue-column">
              <h2>
                Get Started Today!
                <br />
              </h2>
              <p>
                Reach out for if you need money for VISA application or you have
                the business idea but lacks capital? At DEL Finance, our team is
                dedicated at providing you the best loan that suits your
                financial budget. We offer:
              </p>
              <div>
                <strong class="blue">C - </strong> Competitve Rates
              </div>
              <div>
                <strong class="blue">A - </strong> Approval in 60 minutes
              </div>
              <div>
                <strong class="blue">S - </strong> Same day disbursements
              </div>
              <div>
                <strong class="blue">H - </strong> Hassle free application
              </div>
            </div>

            <div class="blue-column"></div>
          </div>

          <div class="column">
            <div class="green-column">
              <p>Please enquire by filling up the details.</p>
              <form>
                <input
                  className="footer-input"
                  name="name"
                  type="name"
                  placeholder="Name"
                />

                <input
                  className="footer-input"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <br />
                <input
                  className="footer-textarea"
                  name="message"
                  type="textarea"
                  placeholder="Your Message"
                />
                <br />
                <Button buttonStyle="btn--outline">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
    
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How to apply for a loan</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Product Offerings</Link>
            <Link to="/">Terms and Privacy</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              DEL
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">DEL © 2020</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
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
      </section>
    </div>
  );
}

export default Footer;
