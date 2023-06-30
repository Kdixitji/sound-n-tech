import React from 'react';
import "../Components/HeadingStyles.css";
import { BiSearchAlt2 } from "react-icons/bi";

const Heading = () => {
  return (
    <div className='heading'>
        <div className='head-name'>
            Sound and Tech
        </div>
        <div className='head-contact'>
            +91 - 96912-48395
        </div>
        <div className='search-container'>
            <input type='text' className="search-input" placeholder='Type to search for anything ...'/>
                <BiSearchAlt2 className='search-icon'/>
        </div>
    </div>
  )
}

export default Heading