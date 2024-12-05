import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import { FaPlane, FaUserFriends, FaMapMarkerAlt } from 'react-icons/fa';
import '../Styles/Milestones.css';

const Milestone = () => {
  const [startCounting, setStartCounting] = useState(false);
  const milestoneRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounting(true);
          observer.disconnect(); // Stop observing after counting starts
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (milestoneRef.current) {
      observer.observe(milestoneRef.current);
    }

    return () => {
      if (milestoneRef.current) {
        observer.unobserve(milestoneRef.current);
      }
    };
  }, []);

  return (
    <div
      id="milestone-section"
      className="milestone-container"
      ref={milestoneRef}
    >
      <h2 className="milestone-title">Our Milestones</h2>
      <div className="milestone-cards">
        {/* Trip Milestone */}
        <div className="milestone-card">
          <FaPlane className="milestone-icon" />
          <h3>Trips</h3>
          <CountUp start={0} end={startCounting ? 120 : 0} duration={5} suffix="+" className="countup" />
        </div>

        {/* Travellers Milestone */}
        <div className="milestone-card">
          <FaUserFriends className="milestone-icon" />
          <h3>Travellers</h3>
          <CountUp start={0} end={startCounting ? 1500 : 0} duration={5} suffix="+" className="countup" />
        </div>

        {/* Locations Milestone */}
        <div className="milestone-card">
          <FaMapMarkerAlt className="milestone-icon" />
          <h3>Locations</h3>
          <CountUp start={0} end={startCounting ? 5 : 0} duration={5} suffix="+" className="countup" />
        </div>
      </div>
    </div>
  );
};

export default Milestone;
