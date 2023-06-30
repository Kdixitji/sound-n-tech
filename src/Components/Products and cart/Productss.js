import React from 'react';
import "./ProductssStyles.css";
import Productdetail from '../Products and cart/Productdetail';
import Productdata from './Productdata';

const Productss = ({ addToCart }) => {
  return (
    <div className='products-container'>
      <div className='Productss'>
        {Productdata.map((val, ind) => {
          return(
            <Productdetail 
            key={ind}
            item={val}
            addToCart={addToCart}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Productss