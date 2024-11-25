import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/About.css';

const About = () => {
  const [inView, setInView] = useState(false);
  const aboutRef = useRef(null);
  const navigate = useNavigate();

  const handleScroll = () => {
    const rect = aboutRef.current.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      setInView(true);
      window.removeEventListener('scroll', handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleReadMoreClick = () => {
    navigate('/about-detail'); // Navigate to AboutDetail.jsx
    window.scrollTo(0, 0); // Scroll to the top of the page after navigation
  };

  return (
    <div className={`about-container ${inView ? 'fade-in' : ''}`} ref={aboutRef}>
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to my profile! With a background in [Your Field/Expertise], I have a deep passion
          for [something related to your expertise or field]. I believe in continuous learning and
          growth, constantly working to improve my skills and contribute effectively to any project I
          undertake.
        </p>
        <p>
          My experience spans across [mention relevant fields or skills], and I've successfully
          delivered [mention notable achievements or projects]. I'm excited to bring my knowledge and
          experience to new challenges and make a meaningful impact.
        </p>
        <button className="AboutButton" onClick={handleReadMoreClick}>
          Read More
        </button>
      </div>
    </div>
  );
};

export default About;
