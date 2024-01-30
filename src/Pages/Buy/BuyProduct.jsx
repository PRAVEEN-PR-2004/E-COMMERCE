import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from "../../products";
import './buystyle.css'; // Import your CSS file
import { ShopContext } from '../../context/Shop_context';

const BuyProduct = () => {
  const { id } = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const [deliveryDate, setDeliveryDate] = useState(null);
  const { username } = useContext(ShopContext);

  // Find the product by ID
  const product = PRODUCTS.find(product => product.id === parseInt(id));

  if (!product) {
    return <div className="product-details">Product not found</div>;
  }

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
    <div className="product-details">
      <div className="product-image">
        <img src={product.productImage} alt={product.productName} />
      </div>
      <div className="product-info">
        <h2>{product.productName}</h2>
        <p className="product-price">{product.price}.RS</p>
        <p className="product-description">
          {product.description}
        </p>
        <button className="buy-button" onClick={handleOrderButtonClick}>PLACE YOUR ORDER</button>
      </div>

      {/* Pop-up */}
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

export default BuyProduct;
