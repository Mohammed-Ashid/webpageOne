import React from 'react';
import '../Styles/Card.css'; // Import a CSS file for styling
import { FaBook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Card = ({ imageUrl, title, description, bookNowText = "Book Now" }) => {
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate(`/trip-details/${title}`);
    window.scrollTo(0, 0); // Pass the title as a parameter
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-buttons">
          <button
            className="card-btn book-now-btn"
            onClick={handleBookNowClick}
          >
            {bookNowText} <FaBook className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
