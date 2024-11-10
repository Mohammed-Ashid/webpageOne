import React, { useState, useEffect } from 'react';
import ReviewComponent from './ReviewComponent';
import reviewImg1 from '/Images/Screenshot_20240202-165344~2.png'; // Image paths
import reviewImg2 from '/Images/Screenshot_20240202-165249~2.png';
import reviewImg3 from '/Images/profile-pic 1.png';

function Reviews() {
  const reviews = [
    {
      image: reviewImg1,
      name: 'Fathima Beevi P s',
      comment: 'Great experience',
    },
    {
      image: reviewImg2,
      name: 'Fathima Zubair',
      comment: 'One of the best part in my life.',
    },
    {
      image: reviewImg3,
      name: 'Mohammed Ashid',
      comment: 'Will come again. One time life experience,Must visit Camp',
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // Change review every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [reviews.length]);

  return (
    <div className="ReviewsContainer">
      <ReviewComponent
        key={reviews[currentReviewIndex].name}
        image={reviews[currentReviewIndex].image}
        name={reviews[currentReviewIndex].name}
        comment={reviews[currentReviewIndex].comment}
        slideDirection={currentReviewIndex}
      />
    </div>
  );
}

export default Reviews;
