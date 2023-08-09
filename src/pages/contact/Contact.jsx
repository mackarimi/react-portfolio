import React from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import "./contact.css";
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pf0wm36",
        "template_t234vdn",
        e.target,
        "pgBQ8od8AudX906Sy"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });

    e.target.reset(); // Reset the form after submission
  };
  return (
    <section className="contact section">
      <h2 className="section__title">
        Contact <span>Me!</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Feel free to reach out !</h3>
          <p className="contact__description">
            I am open to any opportunity of collaboration or just a chat. Feel
            free to contact me. I will get back to you as soon as possible.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Email me</span>
                <h4 className="info__desc">karimiabdolkarim0@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+1 925 381 7167</h4>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <a
              href="https://twitter.com/XalatinKari"
              className="contact__social-link"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.instagram.com/macappne/"
              className="contact__social-link"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/mackarimi/"
              className="contact__social-link"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={sendEmail}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                name="user_name"
                type="text"
                placeholder="Please enter your Name"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                name="user_email"
                type="email"
                placeholder="Please provide your Email"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                name="subject"
                type="text"
                placeholder="Kindly enter a subject"
                className="form__control"
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              name="message"
              placeholder="Your Message"
              className="form__control textarea"
            ></textarea>
          </div>
          <button className="button">
            Submit Message
            <span className="button__icon contact_button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
