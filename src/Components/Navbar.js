import React from 'react';
import "../Components/NavbarStyles.css";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { BsCartPlus, BsCartX } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import Cartitem from './Products and cart/Cartitem';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartItems = useSelector(state => state.cartItems);

    // for navigation
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    // for modal opening and closing
    const[isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    const totalprice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
    //Navigation heading
    <div className='header'>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/products/:id">Products</Link>
            </li>
            <li>
                <Link to="/testimonial">Testimonials</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <BsCartPlus cursor="pointer" size={30} onClick={handleOpen} color="#fff" />
                {isOpen && (
                    <div className="modal">
                        <div className='modal-content'>
                            <div className='modal-nav'>
                                <RxCross1 className="close-btn" onClick={handleClose} size={20} />
                                <h2>Shopping Cart</h2>
                            </div>
                            {cartItems.length === 0 ? (
                                <div className='empty-cart'>
                                    <BsCartX />
                                    <span>No Products in the Cart</span>
                                    <button className='return-cart'>Return to Shopping</button>
                                </div>
                            ):(
                                <>
                                    <div className='cart-items-container'>
                                    {cartItems.map(item => (
                                        <Cartitem 
                                        key={item.id}
                                        image={item.imgsrc}
                                        item={item}
                                        />
                                ))}
                                </div>
                                <div className='cart-footer'>
                                    <div className='sub-total'>
                                        <span className='text'>Subtotal : </span>
                                        <span className='text-total'>&#8377;{totalprice}</span>
                                    </div>
                                    <div className='button'>
                                        <button className='checkout-cart'>
                                            Checkout
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}    
                        </div>
                    </div>
                )}
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (
                <FaTimes size={20} style={{ color: "#fff" }} />
            ) : (
                <FaBars size={20} style={{ color: "black" }} />
            )}
        </div>
    </div>
  )
}

export default Navbar