import React from 'react';
import Card from './Card';
import '../Styles/UpcomingTrips.css';

function Gallery() {
  // Reading environment variables
  const cards = [
    {
      imageUrl: import.meta.env.VITE_UPCOMING_TRIPS_IMAGE1_PATH,
      title: import.meta.env.VITE_UPCOMING_TRIPS_IMAGE1_TITLE,
      description: import.meta.env.VITE_UPCOMING_TRIPS_IMAGE1_DESC,
    },
    {
      imageUrl: import.meta.env.VITE_UPCOMING_TRIPS_IMAGE2_PATH,
      title: import.meta.env.VITE_UPCOMING_TRIPS_IMAGE2_TITLE,
      description: import.meta.env.VITE_UPCOMING_TRIPS_IMAGE2_DESC,
    },
    {
      imageUrl: import.meta.env.VITE_UPCOMING_TRIPS_IMAGE3_PATH,
      title: import.meta.env.VITE_UPCOMING_TRIPS_IMAGE3_TITLE,
      description: import.meta.env.VITE_UPCOMING_TRIPS_IMAGE3_DESC,
    },
    {
      imageUrl: import.meta.env.VITE_UPCOMING_TRIPS_IMAGE4_PATH,
      title: import.meta.env.VITE_UPCOMING_TRIPS_IMAGE4_TITLE,
      description: import.meta.env.VITE_UPCOMING_TRIPS_IMAGE4_DESC,
    },
    {
      imageUrl: import.meta.env.VITE_UPCOMING_TRIPS_IMAGE5_PATH,
      title: import.meta.env.VITE_UPCOMING_TRIPS_IMAGE5_TITLE,
      description: import.meta.env.VITE_UPCOMING_TRIPS_IMAGE5_DESC,
    },
  ];

  return (
    <div className="card-container-div">
      <div className="card-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            className={`image${index + 1}`}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
