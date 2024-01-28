import React, { useContext } from 'react';
import { ShopContext } from '../../context/Shop_context';
import './Product.css';
export const Productitems = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemsAmount = cartItems[id];

  // Function to handle adding to cart and show notification
  const handleAddToCart = () => {
    addToCart(id);
    // Show notification using window.alert()
    window.alert('Item added to cart');
  };

  return (
    <div className='product'>
      <img src={productImage} alt={productName} className="product-image" />
      <div className='description'>
        <p><b>{productName}</b></p>
        <p >{price}.RS</p>
      </div>
      <button className='addToCartBttn' onClick={handleAddToCart}>
        Add to Cart {cartItemsAmount > 0 && <> {cartItemsAmount}</>}
      </button>
    </div>
  );
};

export default Productitems;
