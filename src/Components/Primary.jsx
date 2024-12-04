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
                
                <Gallery />
              </section>

              {/* Gallery Section */}
              <section id="gallery">
              
                <GalleryPreview />
              </section>

              {/* About Section */}
              <section id="about">
              
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
