import React from 'react';
import "../Components/AboutcontentStyles.css";
import aboutimage from "../Components/assets/img2.jpg";

const Aboutcontent = () => {
  return (
    <div className='about'>
        <div className='mask'>
            <img className='about-image' src={aboutimage} alt='aboutimage' />
        </div>
        <div className='about'>
            <div className='content'>
                <h1 className='first'>About Sound and Tech</h1>
                <p>Sound and Tech is driven by our Dedication to quality and most important Reliability. 
                Sound and Tech for over the last 3 years has made a name for itself as a high-quality brand 
                offering excellent products at Great Prices.</p>
                <p>When the Sound and Tech was was started in 2020, 
                the best complement we got was from many satisfied Customers. Sound and Tech's Audio Amplifiers 
                are built Solid like a rock and are still running 
                with Rental Companies attesting to their Reliability.</p>
            </div>
        </div>
    </div>
  )
}

export default Aboutcontent