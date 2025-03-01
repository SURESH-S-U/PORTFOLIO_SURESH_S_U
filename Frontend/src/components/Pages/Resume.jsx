import React, { useState } from 'react';
import "../Styles/Resume.css";
import { GrResume } from "react-icons/gr";

const Resume = () => {
  const [showResume, setShowResume] = useState(false);

  const toggleResume = () => {
    setShowResume(!showResume);
  };

  return (
    <div className='overall-container'>
      <button className='Buttons' onClick={toggleResume}>
        {showResume ? "Close Resume" : "Check My Resume"} &nbsp;&nbsp; <GrResume size={20} />
      </button>

      {showResume && (
        <div className="resume-container">
          <img src="RESUME IMG.jpg" alt="Resume" className="resume-image" />
        </div>
      )}
    </div>
  );
};

export default Resume;
