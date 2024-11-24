import React from 'react';
import Navigation from './Navigation';
import '../Styles/IndexWeb.css';
import Footer from './Footer';
import Primary from './Primary';
import AboutDetail from './AboutDetail';

function IndexWeb() {
  return (
    <div className="main">
      <Navigation />
      <div className="routingBody">
      <Primary/>
      <AboutDetail/>
      </div>
              {/* Footer Section */}
              <section id="footer">
          <Footer />
        </section>
    </div>
  );
}

export default IndexWeb;
