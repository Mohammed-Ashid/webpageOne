import React from 'react';
import '../Styles/AboutDetail.css';

const AboutDetail = () => {
  const visionText = import.meta.env.VITE_VISION_TEXT;
  const visionImage = import.meta.env.VITE_VISION_IMAGE;

  const missionText = import.meta.env.VITE_MISSION_TEXT;
  const missionImage = import.meta.env.VITE_MISSION_IMAGE;

  const historyText = import.meta.env.VITE_HISTORY_TEXT;
  const historyImage = import.meta.env.VITE_HISTORY_IMAGE;

  const teamIntro = import.meta.env.VITE_TEAM_INTRO;
  const teamMembers = [
    {
      name: import.meta.env.VITE_TEAM1_NAME,
      role: import.meta.env.VITE_TEAM1_ROLE,
      image: import.meta.env.VITE_TEAM1_IMAGE,
    },
    {
      name: import.meta.env.VITE_TEAM2_NAME,
      role: import.meta.env.VITE_TEAM2_ROLE,
      image: import.meta.env.VITE_TEAM2_IMAGE,
    },
    {
      name: import.meta.env.VITE_TEAM3_NAME,
      role: import.meta.env.VITE_TEAM3_ROLE,
      image: import.meta.env.VITE_TEAM3_IMAGE,
    },
  ];

  return (
    <div className="about-page-container">
      <div style={{ marginTop: '70px' }}></div>
      <h1>ABOUT US</h1>

      {/* Vision Section */}
      <section className="section vision-section">
        <div className="section-content-vision">
          <div className="text-content">
            <h2>Our Vision</h2>
            <p>{visionText}</p>
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
            <p>{missionText}</p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section history-section">
        <div className="section-content-history">
          <div className="text-content">
            <h2>Our History</h2>
            <p>{historyText}</p>
          </div>
          <div className="image-content">
            <img src={historyImage} alt="History" className="section-image" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="section-content">
          <h2 style={{ width: '100%', textAlign: 'center' }}>Meet Our Team</h2>
          <p className="team-intro">{teamIntro}</p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <img
                  src={member.image}
                  alt={`Team Member ${index + 1}`}
                  className="team-member-img"
                />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutDetail;
