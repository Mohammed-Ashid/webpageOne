// InitialLoading.jsx
import React, { useEffect, useState } from 'react';
import '../Styles/InitialLoading.css'; // Ensure this is correctly imported
import initialLoading from '/Images/Untitled design.gif'

const InitialLoading = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after 3 seconds (same duration as the loading screen)
    const timer = setTimeout(() => {
      setAnimate(true); // Start the animation to move the loading screen
    }, 4000); // Match the 3-second delay from App.js

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className={`loading-container ${animate ? 'move-up' : ''}`}>
      <div className="loading-content">
        <img
          src={initialLoading}
          alt="Loading..."
          className="loading-gif"
        />
      </div>
    </div>
  );
};

export default InitialLoading;
