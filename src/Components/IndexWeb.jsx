import React from 'react'
import First from './First'
import Navigation from './Navigation'
import '../Styles/IndexWeb.css'
import About from './About'
import Milestone from './Milestones'
import Gallery from './UpcomingTrips'
import ReviewComponent from './ReviewComponent'
function IndexWeb() {
  return (
    <div className='main'>
        <Navigation/>
        <First/>
        <Milestone/>
        <h4 className='upcomingHeading'>UPCOMING TRIPS</h4>
        <Gallery/>
        <About/>
        <ReviewComponent/>
      
    </div>
  )
}

export default IndexWeb