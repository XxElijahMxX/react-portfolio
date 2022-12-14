import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import "./contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_y27v58p",
        "template_cp3bwbi",
        form.current,
        "liEsvODw_tOEyRax7"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message has been sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
      <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </StyledContactForm>
    </>
  );
};

export default Contact;

const StyledContactForm = styled.div`
  width: 400px;

  form {
    margin-left: 800px;
    margin-top: 200px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
  }
  input {
    width: 100%;
    height: 35px;
    padding: 7px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(220, 220, 220);
    &:focus {
      border: 2px solid rgba(0, 206, 158, 1);
    }
  }
  textarea {
    max-width: 100%;
    min-width: 100%;
    width: 100%;
    max-height: 100px;
    min-height: 100px;
    padding: 7px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(220, 220, 220);
    &:focus {
      border: 2px solid rgba(0, 206, 158, 1);
    }
  }
  label {
    margin-top: 1rem;
  }
  input[type="submit"] {
    margin-top: 2rem;
    cursor: pointer;
    background: rgb(53, 57, 53);
    color: white;
    border: none;
  }
}
`;
