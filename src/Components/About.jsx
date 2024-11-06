import React, { useEffect, useState, useRef } from 'react';
import '../Styles/About.css';

const About = () => {
  const [inView, setInView] = useState(false);
  const aboutRef = useRef(null);

  const handleScroll = () => {
    const rect = aboutRef.current.getBoundingClientRect();
    // Check if the element is in the viewport
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      setInView(true);
      window.removeEventListener('scroll', handleScroll); // Remove the listener after triggering
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`about-container ${inView ? 'fade-in' : ''}`} ref={aboutRef}>
      {/* Right Section: Professional About Section */}
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
        <button className='AboutButton'>Read More</button>
      </div>
      {/* <div className={`image-stack ${inView ? 'fade-in-images' : ''}`}>
        <img src="Images/waterfall-7478709_640.jpg" alt="Layer 1" className="stack-image" />
        <img src="Images/pexels-sebastian-palomino-933481-1875480.jpg" alt="Layer 2" className="stack-image" />
        <img src="Images/pexels-julieaagaard-1374064.jpg" alt="Layer 3" className="stack-image" />
        <img src="Images/pexels-m-venter-792254-1659438.jpg" alt="Layer 4" className="stack-image" />
      </div> */}
    </div>
  );
};

export default About;
