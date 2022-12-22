import React from "react";
import CardItem from "../CardItem";
import "../../App.css";

export default function Projects() {
  return (
    <>
      <div className="cards">
        <h1>Projects</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="/images/PixelCart.png"
                text="Amazon clone for retro video game systems"
                label="ECommerce"
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
                src="/images/RPG.JPG"
                text="Random Password Generator"
                label="Password Generator"
                path="/projects"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
