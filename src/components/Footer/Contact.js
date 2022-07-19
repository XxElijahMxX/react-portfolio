import "./contact.css";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import Github from "../../img/github.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";



const Contact = () => {
   const form = useRef();
   const [done, setDone] = useState(false)

    const sendEmail = (event)=> {
        event.preventDefault()
        emailjs.sendForm('service_kirnngp', 'template_0chiwds', form.current, 'fat78sXyjdPmgx6nq')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    };

  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrap">
        <div className="contact-left">
          <h1 className="contact-title">How to contact me!</h1>
          <div className="contact-info">
            <div className="info-object">
              <img src={Email} alt="" className="contact-icon" />
              melton.sheridan@gmail.com
            </div>
            <div className="info-object">
                <img className="contact-icon" src={Address} alt="" />
                2728 Brown St, Anderson Indiana United States
            </div>
            <div className="info-object">
                <img className="contact-icon" src={Github} alt="" />
                github.com/XxElijahMxX
            </div>
          </div>
        </div>
        <div className="contact-right">
            <p className="contact-desc">
                <b>Need help with a project?</b> Here's how to get in touch with me for all your
                project needs!
            </p>
            <p>
            Just fill out this quick and easy form.
            </p>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder="Name" name="user_name" />
                <input type="text" placeholder="Subject" name="user_subject" />
                <input type="text" placeholder="Email" name="user_email" />
                <textarea rows="5" placeholder="Message" name="message" />
                <button>Submit</button>
                {done && "Thanks for submitting!"}
            </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
