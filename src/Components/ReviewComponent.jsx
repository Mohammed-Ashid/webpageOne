import React from 'react'
import '../Styles/ReviewComponent.css'
import reviewImg1 from '/Images/Screenshot_20240202-165344~2.png'
import CustomizedRating from './CustomizedRating'
function ReviewComponent() {
  return (
    <div className='ReviewComponent-main-div'>
        <div className='ReviewBox'>
            <div className='ReviewImage'>
                <img src={reviewImg1} alt=""/>
            </div>
            <div className='ReviewComment'>
<h1>Fathima Beevi P s</h1>
<p>Great experince</p>
<CustomizedRating/>
            </div>
        </div>
    </div>
  )
}

export default ReviewComponent