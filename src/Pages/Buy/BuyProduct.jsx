import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from "../../products";
import './buystyle.css'; // Import your CSS file

const BuyProduct = () => {
  const { id } = useParams();

  // Find the product by ID
  const product = PRODUCTS.find(product => product.id === parseInt(id));

  if (!product) {
    return <div className="product-details">Product not found</div>;
  }

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.productImage} alt={product.productName} />
      </div>
      <div className="product-info">
        <h2>{product.productName}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed condimentum ipsum vitae urna faucibus, nec commodo ligula efficitur. 
          Nullam porta, ligula id vestibulum accumsan, mauris ligula eleifend dolor, 
          et commodo turpis nulla id orci. Sed rutrum justo nec ultricies aliquet.
        </p>
        <button className="buy-button">PLACE YOUR ORDER</button>
      </div>
    </div>
  );
};

export default BuyProduct;
