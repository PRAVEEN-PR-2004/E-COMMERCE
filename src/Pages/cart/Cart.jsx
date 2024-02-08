import React, { useContext, useState } from 'react';
import { PRODUCTS } from "../../products";
import CartItem from "./CartItem";
import { ShopContext } from "../../context/Shop_context";
import { useNavigate } from "react-router-dom";

import "./cart.css";

const Cart = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [deliveryDate, setDeliveryDate] = useState(null);
  const navigate = useNavigate();
  const { username } = useContext(ShopContext);
  const { cartItems } = useContext(ShopContext);
  const handleOrderButtonClick = () => {
    // If the username is empty, proceed with the order
    if (username === 'you') {
      
      window.alert("Please log in to place your order!");
    } 
    else {
      // If the username is not empty, show an alert
      const currentDate = new Date();
      const deliveryDate = new Date(currentDate);
      deliveryDate.setDate(deliveryDate.getDate() + 4);
      setDeliveryDate(deliveryDate);
  
      // Show the pop-up when the button is clicked
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    // Close the pop-up
    setShowPopup(false);
  };

  return (
    <div className="cart">
      <h1>Your Cart Items</h1>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
          return null;
        })}
      </div>
      <button className="BuyCart"  onClick={handleOrderButtonClick}>Buy a cart</button>

      <button className="continueShoppingButton" onClick={() => navigate("/")}>
        Continue Shopping
      </button>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>&times;</span>
            <p className='delivery'>Your order has been placed successfully🎉!</p>
            {deliveryDate && (
              <p className='delivery'>Expected Delivery Date: {deliveryDate.toLocaleDateString()}</p>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default Cart;
