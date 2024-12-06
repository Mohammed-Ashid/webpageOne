import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/About.css';

const About = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate('/about-detail'); // Navigate to AboutDetail.jsx
    window.scrollTo(0, 0); // Scroll to the top of the page after navigation
  };

  return (
    <div className="about-container">
      <h4 className="upcomingHeading">ABOUT US</h4>
      <div className="about-content">
        {/* <h2>Welcome to My Profile!</h2> */}
        <p>
          I'm a passionate professional with a background in [Your Field/Expertise]. With a focus on
          [specific area or skill], I aimm to contribute my skills towards innovative and impactful
          projects. Throughout my career, I've continuously refined my expertise in [mention your
          strengths or areas of expertise].
        </p>
        <p>
          My experience spans across [mention relevant fields or technologies]. I've had the privilege
          of working on [highlight significant achievements or projects], and I'm eager to apply my
          knowledge to solve new challenges.
        </p>
        <button className="about-button" onClick={handleReadMoreClick}>
          Read More
        </button>
      </div>
    </div>
  );
};

export default About;
