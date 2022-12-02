import React from "react";
import CardItem from "./CardItem";

function cards() {
  return (
    <div className="cards">
      <h1> Here are some samples of my projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default cards;
