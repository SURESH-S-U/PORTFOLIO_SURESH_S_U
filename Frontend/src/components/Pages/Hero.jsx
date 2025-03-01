import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "../Styles/Hero.css";
import { TiPlusOutline } from "react-icons/ti";


const Hero = () => {
  return (
    <div className="hero-container">
      <h4 className="hero-title">SURESH S U</h4>
      <h1 className="hero-subtitle">
        Web Developer   <span className="plus"><TiPlusOutline size={50} color="gold"/></span> &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="loop">
          &nbsp; &nbsp;&nbsp;
          <Typewriter
            words={["FullStack Developer","UI&UX Designer","AI Engineer"]}
            loop={Infinity}
            cursor
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            className="slide-in-text"
          />
        </div>
      </h1>
    </div>
  );
};

export default Hero;
