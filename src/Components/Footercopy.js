import React from 'react';
import "./FootercopyStyles.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footercopy = () => {
  return (
    <div className='fcopy-container'>
        <h3><AiOutlineCopyrightCircle /> 2023 All rights Reserved by Sound and Tech | 
        Designed and Developed by Kratik Sharma
        </h3>
    </div>
  )
}

export default Footercopy