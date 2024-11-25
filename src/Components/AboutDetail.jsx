import React from 'react';
import '../Styles/AboutDetail.css'; // Ensure you have the corresponding styles
import visionImage from '/Images/photo-1464547323744-4edd0cd0c746.jpeg'; // Use your own images
import missionImage from '/Images/photo-1464547323744-4edd0cd0c746.jpeg';
import historyImage from '/Images/photo-1464547323744-4edd0cd0c746.jpeg';
import teamImage from '/Images/photo-1464547323744-4edd0cd0c746.jpeg';

const AboutDetail = () => {
  return (
    <div className="about-page-container">
      <h1>ABOUT US</h1>
      {/* Vision Section */}
      <section className="section vision-section">
        <div className="section-content-vision">
          <div className="text-content">
            <h2>Our Vision</h2>
            <p>
              Our vision is to become the premier travel company, empowering individuals to explore the world with
              purpose and passion. We aim to provide unforgettable journeys, sustainable travel, and a deep
              connection with diverse cultures.
            </p>
          </div>
          <div className="image-content">
            <img src={visionImage} alt="Vision" className="section-image" />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section mission-section">
        <div className="section-content-mission">
          
          <div className="image-content">
            <img src={missionImage} alt="Mission" className="section-image" />
          </div>
          <div className="text-content">
            <h2>Our Mission</h2>
            <p>
              Our mission is to offer exceptional travel experiences, ensuring each journey is meticulously
              crafted to exceed expectations. We are committed to creating sustainable, meaningful adventures
              that inspire lifelong memories.
            </p>
          </div>

        </div>
      </section>

      {/* History Section */}
      <section className="section history-section">
        <div className="section-content-history">
          <div className="text-content">
            <h2>Our History</h2>
            <p>
              Founded in [Year], we have a rich history of curating world-class experiences for adventurers. From
              humble beginnings, we’ve grown into a global travel company recognized for our excellence, innovation,
              and personalized service.
            </p>
          </div>
          <div className="image-content">
            <img src={historyImage} alt="History" className="section-image" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="section-content">
          <h2 style={{width:"100%",textAlign:"center"}}>Meet Our Team</h2>
          <div>
          <p className="team-intro">
            Our team is the heart of what we do. They bring passion, creativity, and expertise to each journey,
            ensuring our clients receive nothing short of extraordinary experiences.
          </p></div>
          <div className="team-grid">
            <div className="team-member">
              <img src="Images/photo-1464547323744-4edd0cd0c746.jpeg" alt="Team Member 1" className="team-member-img" />
              <h3>John Doe</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <img src="Images/photo-1464547323744-4edd0cd0c746.jpeg" alt="Team Member 2" className="team-member-img" />
              <h3>Jane Smith</h3>
              <p>Lead Travel Planner</p>
            </div>
            <div className="team-member">
              <img src="Images/photo-1464547323744-4edd0cd0c746.jpeg" alt="Team Member 3" className="team-member-img" />
              <h3>Robert Brown</h3>
              <p>Customer Relations Manager</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutDetail;
