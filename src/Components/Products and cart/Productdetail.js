import React, { useState } from 'react';
import "./ProductdetailStyles.css";
import { RxCross1 } from 'react-icons/rx';
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartactions';

const Productdetail = ({ item }) => {
  const dispatch = useDispatch();
  
  const handleAddToCart = () => {
    const newItem = {
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.imgsrc,
      quantity: quantity
    };
    dispatch(addToCart(newItem));
    window.alert("Item is added Successfully")
  }

  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleOpen = () => {
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <div className='product-containers'>
      <div className='product-card' onClick={handleOpen}>
        <div className='thumbnail'>
          <img src={item.imgsrc} alt='' />
          <h2 className='product-title'>{item.title}</h2>
          <h4 className='product-price'>&#8377;{item.price}</h4>
        </div>
      </div>
      {isOpen && (
        <div className="modal">
          <div className='modal-contents'>
            <div className='modal-nav'>
              <RxCross1 className="close-btn" onClick={handleClose} size={20} />
            </div>
            <div className='single-product-content'>
              <div className='layout'>
                <div className='single-product-page'>
                  <div className='top'>
                    <img src={item.imgsrc} alt='' />
                  </div>
                  <div className='bottom'>
                    <span className='name'>{item.title}</span>
                    <span className='price'>&#8377;{item.price}</span>
                    <span className='desc'>{item.description}</span>
                    <div className='cart-buttons'>
                      <div className='quantity-buttons'>
                        <span onClick={handleDecrement}>-</span>
                        <span>{quantity}</span>
                        <span onClick={handleIncrement}>+</span>
                      </div>
                      <button className='add-to-cart-button' onClick={handleAddToCart}>
                        <FaCartPlus size={20} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Productdetail;
