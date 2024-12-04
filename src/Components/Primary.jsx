import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import First from "./First";
import About from "./About";
import Milestone from "./Milestones";
import Gallery from "./UpcomingTrips";
import Reviews from "./Reviews";
import GalleryPreview from "./GalleryPreview";
import "../Styles/IndexWeb.css";

function Primary() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to the correct section based on the URL hash
  useEffect(() => {
    const sectionId = location.hash?.substring(1); // Extract section ID from hash
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  // Handler to navigate and scroll to the section
  const handleNavigation = (path, sectionId) => {
    navigate(path + `#${sectionId}`);
  };

  return (
    <div>
      {/* <nav className="navbar">
        <button onClick={() => handleNavigation("/webpageOne/", "home")}>Home</button>
        <button onClick={() => handleNavigation("/webpageOne/", "about")}>About</button>
        <button onClick={() => handleNavigation("/webpageOne/", "milestones")}>Milestones</button>
        <button onClick={() => handleNavigation("/webpageOne/", "upcoming-trips")}>
          Upcoming Trips
        </button>
        <button onClick={() => handleNavigation("/webpageOne/", "gallery")}>Gallery</button>
        <button onClick={() => handleNavigation("/webpageOne/", "reviews")}>Reviews</button>
      </nav> */}

      <Routes>
        <Route
          path="/"
          element={
            <div>
              {/* First Section */}
              <section id="home">
                <First />
              </section>

              {/* Milestones Section */}
              <section id="milestones" >
                <Milestone />
              </section>

              {/* Upcoming Trips Section */}
              <section id="upcoming-trips">
                <h4 className="upcomingHeading">UPCOMING TRIPS</h4>
                <Gallery />
              </section>

              {/* Gallery Section */}
              <section id="gallery">
                <h4 className="upcomingHeading">Gallery</h4>
                <GalleryPreview />
              </section>

              {/* About Section */}
              <section id="about">
              <h4 className="upcomingHeading">ABOUT US</h4>
                <About />
              </section>

              {/* Reviews Section */}
              <section id="reviews">
                <Reviews />
              </section>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default Primary;
