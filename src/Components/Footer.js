import React from 'react';
import "./FooterStyles.css";
import { Link } from "react-router-dom";
import { FaPhone, FaMailBulk } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='one'>
          <h1>PRODUCTS</h1>
          <ul>
            <li>Live Sound</li>
            <li>Live Sound</li>
            <li>Live Sound</li>
          </ul>
        </div>
        <div className='two'>
          <h1>COMPANY</h1>
          <ul>
            <li>
              <Link to="/about">
                <h4>About us</h4>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <h4>Contact us</h4>
              </Link>
            </li>
          </ul>
        </div>
        <div className='three'>
          <h1>CONTACT</h1>
          <div className='location'>
            <HiLocationMarker 
              size={20}
              style={{ color : "wheat", marginRight : "2rem" }}/>
            <div>
              <p>Ujjain, M.P. (India)</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone 
                size={20} 
                style={{ color : "wheat", marginRight : "2rem" }}/>
                +91 - 99930-83792
                </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk 
                size={20} 
                style={{ color : "wheat", marginRight : "2rem" }}/>
                kdixitji@gmail.com
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer