import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/cinna thumb.PNG"
              text="Landing page for a bakery"
              label="Website"
              path="/projects"
            />
            <CardItem
              src="/images/Weather Advice.png"
              text="Weather app with random advice"
              label="Weather"
              path="/projects"
            />
            <CardItem
              src="/images/run buddy.JPG"
              text="Fitness Trainer landing page"
              label="Website"
              path="/projects"
            />
            <CardItem
              src="/images/pixel cart new.png"
              text="Pixel Cart(new version)"
              label="ECommerce"
              path="/projects"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
