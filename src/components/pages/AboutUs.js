import React from "react";
import del from "../../images/del.jpg";
import "../../App.css";

function AboutUs() {
  return (
    <div className="aboutus-container">
      <h1 className="about-us">About Us</h1>
      <div className="aboutus-info">
        <p>
        Dignos Equity Lending Pty Ltd Trading as Del Finance (‘We’) are a private lender aimed at
providing no frills, fast cash and quick application for personal or business purposes at a
competitive rate. We help everyday Aussies with their emergency and out of nowhere expenses
by providing short term relief and flexible payments.
        </p>
        <p>Our team is dedicated in helping you find the loans. We offer:</p>
        <div class="aboutus-info">
          <div class="row">
            <div class="column">
              <div class="dellogo">
                <img src={del} height={200} width={500} alt="dellogo"></img>
              </div>
            </div>
            <div class="column">
              <div class="aboutus-offer">
                <div>
                  <strong class="cash">C - </strong> Competitve Rates
                </div>
                <div>
                  <strong class="cash">A - </strong> Approval in 60 minutes*
                </div>
                <div>
                  <strong class="cash">S - </strong> Same day disbursements*
                </div>
                <div>
                  <strong class="cash">H - </strong> Hassle free application
                </div>
              </div>
            </div>
            <div class="small-prints">
              *Once we acknowledged receipts of your application, we will
              process on the same day and your approval will take place within
              60 minutes. Fund disbursement is same day upon signing of
              contract.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
