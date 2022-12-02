/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import { Link } from "react-router-dom";

function carditem() {
  return (
    <>
      <li className="card__item">
        <Link className="cards_item__link">
          <figure className="cards__cards__pic-wrap">
            <img src="/" alt="projects" className="cards__item_img" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text"></h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default carditem;
