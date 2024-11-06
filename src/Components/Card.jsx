// Card.jsx
import React from 'react';
import '../Styles/Card.css'; // Import a CSS file for styling
import { FaArrowRight, FaBook } from 'react-icons/fa';

const Card = ({ imageUrl, title, description, bookNowText = "Book Now" }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-buttons">

          <button className="card-btn book-now-btn">
            {bookNowText} <FaBook className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
