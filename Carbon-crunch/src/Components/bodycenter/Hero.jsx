import React from "react";
import "./Hero.css";
import HeroBackground from "../animation/HeroBackground";
import image from '../../Images/Text.png'

const Hero = () => {
  return (
    <section className="hero-main">
      {/* Add the animated background */}
      <HeroBackground />

      <div className="hero-container">
        <div className="colored-bar">
          <img src={image} alt="hand-icon" />
          <span className="colored-text"> Let's have a tour </span>
        </div>
        <div className="hero-content">
          <h1 className="hero-heading">
            Streamline Your Sustainability Reporting With
            <span className="highlight"> CARBON CRUNCH</span>
          </h1>
          <p className="hero-subheading">
            <span className="highlight">90% </span> With Accurate Carbon
            Calculations Trusted by Industry Leaders
          </p>
          <div className="hero-btn">
            <button className="calculator-btn"> Free Calculator</button>
            <button className="book-demo-btn"> Book Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
