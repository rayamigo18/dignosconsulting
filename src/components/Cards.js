import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
//import Products from "./pages/Products";

function Cards() {
  return (
    <div className="cards">
      <h1>
        Reach out if you need tuition fees for your school, funds for your short term loans, money for VISA application or you have the
        business idea but lack capital? At DEL Finance, our team is dedicated
        at providing you the best loan. We
        offer CASH:
      </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/cash.png"
              text="C- Competitive Rates"
              label="C"
              path="/travel"
            />
            <CardItem
              src="images/approval.png"
              text="A - Approval in 60 Minutes"
              label="A"
              path="/products"
            />
            <CardItem
              src="images/time.png"
              text="S - Same day disbursement"
              label="S"
              path="/products"
            />
            <CardItem
              src="images/hasslefree.png"
              text="H - Hassle free application"
              label="H"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
