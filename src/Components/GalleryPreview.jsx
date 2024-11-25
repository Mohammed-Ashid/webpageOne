import React from "react";
import Slider from "react-slick";
import { Box, Typography, CardMedia } from "@mui/material";
import "../Styles/GalleryPreview.css"; // CSS for styles.
import { useNavigate } from "react-router-dom";

const GalleryData = [
  { name: "Company 1", logo: "Images/photo-1464547323744-4edd0cd0c746.jpeg" },
  { name: "Company 2", logo: "Images/photo-1464547323744-4edd0cd0c746.jpeg" },
  { name: "Company 3", logo: "Images/photo-1464547323744-4edd0cd0c746.jpeg" },
  { name: "Company 4", logo: "Images/photo-1464547323744-4edd0cd0c746.jpeg" },
  { name: "Company 5", logo: "Images/photo-1464547323744-4edd0cd0c746.jpeg" },
  // Add more companies here...
];

function GalleryPreview() {
  const navigate=useNavigate();
const handlemoreButtonClick = () =>{
navigate('/Gallery-details');
window.scrollTo(0, 0);
}
  const sliderSettings = {
    infinite: true,
    speed: 7000, // Smooth transition speed
    slidesToShow: 3, // Adjust based on screen size
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Seamless scrolling
    cssEase: "linear",
    rtl: true, // Reverse direction (left to right)
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // Screen width less than or equal to 768px
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="companies-section">
      <Slider {...sliderSettings} className="companies-slider">
        {GalleryData.map((company, index) => (
          <Box className="company-logo" key={index}>
            <CardMedia
              component="img"
              image={company.logo}
              alt={company.name}
              className="company-image"
            />
          </Box>
        ))}
      </Slider>
      <button onClick={handlemoreButtonClick}>more</button>
    </div>
  );
}

export default GalleryPreview;
