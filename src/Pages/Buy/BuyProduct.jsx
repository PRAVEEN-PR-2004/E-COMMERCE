import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from "../../products";

const BuyProduct = () => {
  const { id } = useParams();

  // Find the product by ID
  const product = PRODUCTS.find(product => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div style={{ fontSize: '24px' }}>
      <h2 style={{ fontSize: '36px' }}>Product Details</h2>
      <div>
        <img src={product.productImage} alt={product.productName} />
        <p style={{ fontSize: '20px' }}>Name: {product.productName}</p>
        <p style={{ fontSize: '20px' }}>Price: {product.price}</p>
        {/* You can display additional product details here */}
      </div>
    </div>
  );
};

export default BuyProduct;
