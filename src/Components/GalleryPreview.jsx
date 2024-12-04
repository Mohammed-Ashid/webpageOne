import React from "react";
import Slider from "react-slick";
import { Box, CardMedia } from "@mui/material";
import "../Styles/GalleryPreview.css"; // CSS for styles.
import { useNavigate } from "react-router-dom";

function GalleryPreview() {
  const navigate = useNavigate();

  const handleMoreButtonClick = () => {
    navigate('/Gallery-details');
    window.scrollTo(0, 0);
  };

  // Define the gallery data using environment variables
  const GalleryData = [
    { name: "Company 1", logo: import.meta.env.VITE_COMPANY1_LOGO },
    { name: "Company 2", logo: import.meta.env.VITE_COMPANY2_LOGO },
    { name: "Company 3", logo: import.meta.env.VITE_COMPANY3_LOGO },
    { name: "Company 4", logo: import.meta.env.VITE_COMPANY4_LOGO },
    { name: "Company 5", logo: import.meta.env.VITE_COMPANY5_LOGO },
  ];

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
        breakpoint: 480, // Screen width less than or equal to 768px
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="companies-section">
        <div className="upcomingHeading">Gallery</div>
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
      <div className="button-div-gallery">
      <button onClick={handleMoreButtonClick}>more</button></div>
    </div>
  );
}

export default GalleryPreview;
