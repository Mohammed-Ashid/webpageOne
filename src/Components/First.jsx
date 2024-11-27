import React, { useState, useEffect } from 'react';
import '../Styles/First.css';
import { FaHiking } from 'react-icons/fa';

function First() {
  // Load slides from environment variables
  const slides = [
    {
      desktopImage: import.meta.env.VITE_SLIDE1_DESKTOP_IMAGE,
      mobileImage: import.meta.env.VITE_SLIDE1_MOBILE_IMAGE,
      text: import.meta.env.VITE_SLIDE1_TEXT,
    },
    {
      desktopImage: import.meta.env.VITE_SLIDE2_DESKTOP_IMAGE,
      mobileImage: import.meta.env.VITE_SLIDE2_MOBILE_IMAGE,
      text: import.meta.env.VITE_SLIDE2_TEXT,
    },
    {
      desktopImage: import.meta.env.VITE_SLIDE3_DESKTOP_IMAGE,
      mobileImage: import.meta.env.VITE_SLIDE3_MOBILE_IMAGE,
      text: import.meta.env.VITE_SLIDE3_TEXT,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Handle device screen size change
  const checkIfMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    // Initial check for screen size
    checkIfMobile();

    // Add resize event listener
    window.addEventListener('resize', checkIfMobile);

    const interval = setInterval(() => {
      setFade(false); // Start fade-out for the current slide
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setFade(true); // Fade-in the new slide
      }, 3000);
    }, 4000);

    return () => {
      // Cleanup event listener
      window.removeEventListener('resize', checkIfMobile);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`background ${fade ? 'fade-in' : ''}`}
      style={{
        backgroundImage: `url(${isMobile ? slides[currentSlide].mobileImage : slides[currentSlide].desktopImage})`,
      }}
    >
      <div className={`content-first ${fade ? 'fade-in' : ''}`}>
        <h1 className="btn-shine">{slides[currentSlide].text}</h1>
        <button className="glow-button">
          Book Now <FaHiking className="icon" />
        </button>
      </div>
    </div>
  );
}

export default First;
