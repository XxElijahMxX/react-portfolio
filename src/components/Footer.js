import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Me</h2>
            <Link></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
