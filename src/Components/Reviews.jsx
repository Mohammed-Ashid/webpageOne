import React, { useState, useEffect } from 'react';
import ReviewComponent from './ReviewComponent';
import '../Styles/Reviews.css';

function Reviews() {
  // Load reviews from environment variables
  const reviews = [
    {
      image: import.meta.env.VITE_REVIEW1_IMAGE,
      name: import.meta.env.VITE_REVIEW1_NAME,
      comment: import.meta.env.VITE_REVIEW1_COMMENT,
    },
    {
      image: import.meta.env.VITE_REVIEW2_IMAGE,
      name: import.meta.env.VITE_REVIEW2_NAME,
      comment: import.meta.env.VITE_REVIEW2_COMMENT,
    },
    {
      image: import.meta.env.VITE_REVIEW3_IMAGE,
      name: import.meta.env.VITE_REVIEW3_NAME,
      comment: import.meta.env.VITE_REVIEW3_COMMENT,
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [previousReviewIndex, setPreviousReviewIndex] = useState(reviews.length - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousReviewIndex(currentReviewIndex);
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [currentReviewIndex]);

  return (
    <div className="Reviews-main-div">
      <h1 className="Reviews-heading">Trailblazers’ Stories</h1>
      <ReviewComponent
        key={reviews[currentReviewIndex].name}
        image={reviews[currentReviewIndex].image}
        name={reviews[currentReviewIndex].name}
        comment={reviews[currentReviewIndex].comment}
        slideDirection="in"
        isPrevious={false}
      />
      <ReviewComponent
        key={reviews[previousReviewIndex].name}
        image={reviews[previousReviewIndex].image}
        name={reviews[previousReviewIndex].name}
        comment={reviews[previousReviewIndex].comment}
        slideDirection="out"
        isPrevious={true}
      />
    </div>
  );
}

export default Reviews;
