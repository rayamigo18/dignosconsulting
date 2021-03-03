import React from "react";
import { useState } from "react";
import "../../App.css";
import Recaptcha from "react-recaptcha";
import { useForm } from "react-hook-form";
import Footer from "../Footer";
import emailjs from "emailjs-com";

function ContactUs() {
  const { register, handleSubmit, errors } = useForm();


  const [state, setState] = useState("false");

  //const state = {
  //  isVerified: false,
  //};

  function sendEmail(form, e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yip2txt",
        "template_1yn193u",
        e.target,
        "user_UNnW6Xlc97h20WK28kvsv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  function recaptchaLoaded() {
    console.log("capcha successfully loaded");
  }

  function handleSubscribe() {
    if (state === false) {
      console.log(state);
      alert("Please verify that you are a human!");
    }
  }

  function verifyCallback(response) {
    if (response) {
      console.log(response)
      setState({
        state: true,
      });
    }
  }

  return (
    <div className="contactus-container">
      <div className="contact-us">
        <h1>Contact Information</h1>
      </div>
      <div className="contactus-info">
        <div>
          <i class="fas fa-map-marker-alt"></i> Melbourne Victoria
        </div>
        <div>
          <i class="fas fa-phone"></i>
          <a href="tel:+61466906189"> 0466906189</a>
        </div>
        <div>
          <i class="fas fa-envelope"></i>
          <a href="mailto:enquiries@delfinance.com.au">
            {" "}
            enquiries@delfinance.com.au
          </a>
        </div>
      </div>

      <div className="contactus-details">
        <h2>
          Get Started Today!
          <br />
        </h2>
        <p>
          Don't hesitate to give us a call or send us a contact form message
        </p>

        <p>Please enquire by filling up the details.</p>
        <form onSubmit={handleSubmit(sendEmail)}>
          <input
            ref={register({
              required: {
                value: true,
                message: "You must enter your Full Name",
              },
              maxLength: {
                value: 40,
                message: "Your Full name must be at least 40 characters",
              },
            })}
            type="text"
            name="name"
            placeholder="Full Name"
          />
          {errors.name && <div className="error">{errors.name.message}</div>}
          <input type="text" name="loanPurpose" placeholder="Loan Purpose" />
          <input
            ref={register({
              required: {
                value: true,
                message: "You must enter an email address",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email",
              },
            })}
            type="text"
            placeholder="Email"
            name="email"
          />
          {errors.email && <div className="error">{errors.email.message}</div>}
          <textarea
            name="message"
            placeholder="Message"
            ref={register({ required: true })}
          />
          <Recaptcha
            sitekey="6LdyvmgaAAAAAPJCvqbizPcJ7-IR15vXDXhyrL6g"
            render="explicit"
            //onChange={useCallback(() => setDisableSubmit(false))}
            onloadCallback={recaptchaLoaded}
            verifyCallback={verifyCallback}
          />
          <input type="submit" ></input>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
