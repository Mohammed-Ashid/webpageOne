import React, { useState, useEffect } from 'react';
import '../Styles/First.css';
import { FaHiking } from 'react-icons/fa';

import image1Desktop from '/Images/boat-4899802_1280.jpg'
import image2Desktop from '/Images/photo-1464547323744-4edd0cd0c746.jpeg'
import image3Desktop from '/Images/boat-4899802_1280.jpg'

import image1Mobile from '/Images/pexels-m-venter-792254-1659438.jpg'
import image2Mobile from '/Images/pexels-sebastian-palomino-933481-1875480.jpg'
import image3Mobile from '/Images/pexels-julieaagaard-1374064.jpg'

const slides = [
  {
    desktopImage: image1Desktop,
    mobileImage: image1Mobile,
    text: "LET'S HIKE WITH HIKER INDIA",
  },
  {
    desktopImage: image2Desktop,
    mobileImage: image2Mobile,
    text: "EXPERIENCE THE ADVENTURE OF A LIFETIME",
  },
  {
    desktopImage: image3Desktop,
    mobileImage: image3Mobile,
    text: "JOIN US FOR UNFORGETTABLE TRAILS",
  }
];

function First() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true); // Start with fade set to true
  const [isMobile, setIsMobile] = useState(false);

  // Handle device screen size change
  const checkIfMobile = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
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
      }, 500);
    }, 3000);

    return () => {
      // Cleanup event listener
      window.removeEventListener('resize', checkIfMobile);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`background ${fade ? 'fade-in' : ''}`} // Apply fade-in class initially
      style={{
        backgroundImage: `url(${isMobile ? slides[currentSlide].mobileImage : slides[currentSlide].desktopImage})`, // Use mobile or desktop image based on screen size
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
