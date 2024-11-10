import React from 'react';
import '../Styles/ReviewComponent.css';
import CustomizedRating from './CustomizedRating';

function ReviewComponent({ image, name, comment }) {
  return (
    <div className='ReviewComponent-main-div'>
      <div className='ReviewBox'>
        <div className='ReviewImage'>
          <img src={image} alt="" />
          <CustomizedRating />
        </div>
        <div className='ReviewComment'>
          <h1>{name}</h1>
          <p>{comment}</p>
          
        </div>
      </div>
    </div>
  );
}

export default ReviewComponent;
