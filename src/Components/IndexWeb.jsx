import React from 'react';
import Navigation from './Navigation';
import '../Styles/IndexWeb.css';
import Footer from './Footer';
import Primary from './Primary';
import AboutDetail from './AboutDetail';

import GalleryDetails from './GalleryDetails';

function IndexWeb() {
  return (
    <div className="main">
      <Navigation />
      <div className="routingBody">
      <Primary/>
      <AboutDetail/>
      <GalleryDetails/>
      </div>
              {/* Footer Section */}
              <section id="footer">
          <Footer />
        </section>
    </div>
  );
}

export default IndexWeb;
