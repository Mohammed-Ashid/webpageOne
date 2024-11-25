import React from "react";
import { useParams } from "react-router-dom";
import "../Styles/TripDetails.css"; // Import your CSS file

const TripDetails = () => {
  const { title } = useParams(); // Assuming the route includes the title as a parameter

  // Map the title to the corresponding environment variables
  const tripData = {
    MEESHAPPULIMALA: {
      title: import.meta.env.VITE_MEESHAPPULIMALA_TITLE,
      images: import.meta.env.VITE_MEESHAPPULIMALA_IMAGES.split(","),
      fees: import.meta.env.VITE_MEESHAPPULIMALA_AMOUNT,
      description: import.meta.env.VITE_MEESHAPPULIMALA_DESCRIPTION,
      summary: import.meta.env.VITE_MEESHAPPULIMALA_SUMMARY,
      itinerary: import.meta.env.VITE_MEESHAPPULIMALA_ITINERARY.split(";"),
    },
    GAVI: {
      title: import.meta.env.VITE_GAVI_TITLE,
      images: import.meta.env.VITE_GAVI_IMAGES.split(","),
      fees: import.meta.env.VITE_GAVI_AMOUNT,
      description: import.meta.env.VITE_GAVI_DESCRIPTION,
      summary: import.meta.env.VITE_GAVI_SUMMARY,
      itinerary: import.meta.env.VITE_GAVI_ITINERARY.split(";"),
    },
    MANALI: {
      title: import.meta.env.VITE_MANALI_TITLE,
      images: import.meta.env.VITE_MANALI_IMAGES.split(","),
      fees: import.meta.env.VITE_MANALI_AMOUNT,
      description: import.meta.env.VITE_MANALI_DESCRIPTION,
      summary: import.meta.env.VITE_MANALI_SUMMARY,
      itinerary: import.meta.env.VITE_MANALI_ITINERARY.split(";"),
    },
    KAZAKISTHAN: {
      title: import.meta.env.VITE_KAZAKISTHAN_TITLE,
      images: import.meta.env.VITE_KAZAKISTHAN_IMAGES.split(","),
      fees: import.meta.env.VITE_KAZAKISTHAN_AMOUNT,
      description: import.meta.env.VITE_KAZAKISTHAN_DESCRIPTION,
      summary: import.meta.env.VITE_KAZAKISTHAN_SUMMARY,
      itinerary: import.meta.env.VITE_KAZAKISTHAN_ITINERARY.split(";"),
    },
    MANA: {
      title: import.meta.env.VITE_MANA_TITLE,
      images: import.meta.env.VITE_MANA_IMAGES.split(","),
      fees: import.meta.env.VITE_MANA_AMOUNT,
      description: import.meta.env.VITE_MANA_DESCRIPTION,
      summary: import.meta.env.VITE_MANA_SUMMARY,
      itinerary: import.meta.env.VITE_MANA_ITINERARY.split(";"),
    },
  };

  const trip = tripData[title];
  if (!trip) {
    return <h1>Trip details not found!</h1>;
  }

  return (
    <div className="trip-details">
        <div style={{marginTop:"70px"}}></div>
      {/* Title */}
      <h1 className="trip-title">{trip.title}</h1>

      {/* Images */}
      <div className="trip-images">
        {trip.images.map((image, index) => (
          <img key={index} src={image} alt={`${trip.title} ${index + 1}`} />
        ))}
      </div>

      {/* Trip Fees and Book Button */}
      <div className="trip-fees">
        <h2>Trip Fee: ${trip.fees}</h2>
        <button className="book-now-button">Book Now</button>
      </div>

      {/* Description */}
      <div className="trip-description">
        <h3>Description</h3>
        <p>{trip.description}</p>
      </div>

      {/* Summary */}
      <div className="trip-summary">
        <h3>Summary</h3>
        <p>{trip.summary}</p>
      </div>

      {/* Detailed Itinerary */}
      <div className="trip-itinerary">
        <h3>Detailed Itinerary</h3>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Location</th>
              <th>Food</th>
            </tr>
          </thead>
          <tbody>
            {trip.itinerary.map((entry, index) => {
              const [day, location, food] = entry.split("-");
              return (
                <tr key={index}>
                  <td>{day}</td>
                  <td>{location}</td>
                  <td>{food}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TripDetails;
