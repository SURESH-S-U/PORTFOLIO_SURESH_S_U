import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "../Styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero-wrapper"> {/* Parent Wrapper */}
      <div className="hero-container">  
        <h4 className="hero-title">SURESH S U</h4>
        <h1 className="hero-subtitle">
          Developer <br /> + &nbsp;
          <Typewriter
            words={["Web Developer", "AI Engineer", "Designer", "Engineer"]}
            loop={Infinity}
            cursor
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
      </div>
    </div>
  );
};

export default Hero;
