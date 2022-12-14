import React from "react";
import "./contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <h1>Contact Links</h1>
      <div className="social-links">
        <a
          className="linkedIn"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/sheridan-melton-b16287231/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#0072b1" />
        </a>

        <a
          className="github"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/XxElijahMxX"
        >
          <FontAwesomeIcon icon={faGithub} color="teal" />
        </a>

        <a
          className="twitter"
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/ElijahM45"
        >
          <FontAwesomeIcon icon={faTwitter} color="#1da1f2" />
        </a>

        <a
          className="insta"
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/xxelijahmxx/"
        >
          <FontAwesomeIcon icon={faInstagram} color="#5851db, " />
        </a>
      </div>
    </>
  );
};

export default Contact;
