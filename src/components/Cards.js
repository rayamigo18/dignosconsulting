import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
//import Products from "./pages/Products";

function Cards() {
  return (
    <div className="cards">
      <h3>
      Australia is a world leader in the provision of high quality education in all disciplines. Australian colleges/universities offer international 
      students with an opportunity to learn and study in a safe and welcoming environment. An Australian education provides international students the 
      chance to develop academically as well as professionallly, whislt instilling invaluable life skills.
      </h3>
      <h3>
      Dignos Consulting will assist you with your application needs and provide you with the confidence and preparedness required to begin your Australian study adventure.
      </h3>
      <h3>We offer the following services: </h3>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            
            <CardItem
              src="images/pathway.png"
              text="Find the right pathway to cater for your specific needs and educational best interest"
              label="Pathway"
            />
            <CardItem
              src="images/admission.png"
              text="Provide service to help with your university admission and enrolment"
              label="Admission"
            />
            <CardItem
              src="images/visaapplication.png"
              text="Assist with your student visa application"
              label="Student Visa"
            />
             <CardItem
              src="images/graduate.png"
              text="Provide assistance throughout your college/university life until you meet your desired educational goal in Australia"
              label="Graduation"
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
