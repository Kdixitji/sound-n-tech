import React from 'react';
import { useState } from 'react';
import "./CartitemStyles.css";
import { MdClose } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cartactions';

const Cartitem = ({item}) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = () =>{
    dispatch(removeFromCart(item.id));
    window.alert("Item Removed Successfully")
  }

  const [quantity, setQuantity] = useState(item.quantity);

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <div className='cart-products'>
        <div className='cart-product'>
            <MdClose className="close-btn" onClick={handleRemoveFromCart} />
            <div className='img-container'>
                <img src={item.imgsrc} alt='' />
            </div>
            <div className='prod-details'>
                <span className='name'>{item.title}</span>
                <div className='quantity-buttons'>
                    <span onClick={handleDecrement}>-</span>
                    <span>{quantity}</span>
                    <span onClick={handleIncrement}>+</span>
                </div>
                <div className='text'>
                    <span>{quantity}</span>
                    <span>x</span>
                    <span className='highlight'>&#8377;{quantity * item.price}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cartitem