import React from "react";
import Profile from "../../assets/home.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="Karim Karimi" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Karim Karimi.</span> Web Developer
          </h1>
          <p className="home__description">
            Welcome to my portfolio! An explorer of interests, I find joy in
            technology, cooking new recipes, and navigating virtual realms. My
            family lights up my life, and with dedication and a thirst for
            knowledge, I strive for success in all I do. Join me on this
            transformative journey of lifelong learning as we connect and
            explore new possibilities together!
          </p>
          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default Home;
