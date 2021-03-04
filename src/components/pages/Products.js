import React from "react";
import "../Cards.css";
import CardItem from "../CardItem";

function Products(props) {
  console.log(props);
  return (
    <div className="cards">
      <h1>
        We have years of experience helping clients achieve their dreams while
        meeting their financial goals!
      </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/renthouse2.png"
              text="Need to move soon but still need that fund for the bond?"
              label="Rental Bond"
              path="/products"
            />
            <CardItem
              src="images/school.jpeg"
              text="School is less cool if you don’t have that tool. We can help you fund that laptop or computing device you require to get your degree."
              label="School Equipment"
              path="/products"
            />
            <CardItem
              src="images/visa.png"
              text="Wanting to apply for temporary or permanent VISA?"
              label="VISA Application Fees"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/businessloan.png"
              text="Got that business idea but lacks the capital? We can help you fund that dream and turn it into a reality."
              label="Working Capital"
              path="/products"
            />
            <CardItem
              src="images/coins.png"
              text="Short for funds and need short term loan now?"
              label="Short Term Loan"
              path="/products"
            />
            <CardItem
              src="images/tuitionfees.png"
              text="Found the right course for you but short of money?"
              label="School Tuition Fees"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Products;
