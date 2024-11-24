import React from 'react'

import First from './First';

import '../Styles/IndexWeb.css';
import About from './About';
import Milestone from './Milestones';
import Gallery from './UpcomingTrips';

import Reviews from './Reviews';
import GalleryPreview from './GalleryPreview';
import AboutDetail from './AboutDetail';

function Primary() {
  return (
    <div>
                {/* First Section */}
                <section id="home">
          <First />
        </section>

        {/* Milestones Section */}
        <section id="milestones">
          <Milestone />
        </section>

        {/* Upcoming Trips Section */}
        <section id="upcoming-trips">
          <h4 className="upcomingHeading">UPCOMING TRIPS</h4>
          <Gallery />
        </section>
        <section id="gallery">
          <h4 className="upcomingHeading">Gallery</h4>
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
  )
}

export default Primary