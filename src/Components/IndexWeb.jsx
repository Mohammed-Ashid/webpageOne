import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Footer from './Footer';
import Primary from './Primary';
import AboutDetail from './AboutDetail';
import GalleryDetails from './GalleryDetails'
import TripDetails from './TripDetails';
import UpcomingTrips from './UpcomingTrips'
import RazorpayPayment from './RazorpayPayment';

function App() {
  return (
    <Router>
      <div className="main">
        <Navigation />
        <div className="routingBody">
          <Routes>
            {/* Define routes for sections */}
            <Route path="/" element={<Primary />} />
            <Route path="/about-detail" element={<AboutDetail />} />
            <Route path="/Gallery-details" element={<GalleryDetails/>} />
            <Route path="/trip-details/:title" element={<TripDetails/>} />
            <Route path="/trips" element={<UpcomingTrips/>} />
            <Route path="/payment" element={<RazorpayPayment />} />
          </Routes>
        </div>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </Router>
  );
}

export default App;
