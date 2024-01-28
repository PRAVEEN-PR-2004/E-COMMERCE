import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop_context";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Cartitems.css";

export const CartItem = ({ data }) => {
  // Destructure data directly in function argument
  const { id, productName, price, productImage } = data;
  const { removeToCart } = useContext(ShopContext);
  const navigate = useNavigate(); // Get the navigate function

  const handleBuy = () => {
    navigate(`/buy/${id}`); // Navigate to the Buy page
  };

  return (
    <div className="cartItem">
      <img src={productImage} alt="" />
      <div className="description">
        <p className="productName">
          <b>{productName}</b>
        </p>
        <p className="price">
          <b>{price}</b>
        </p>
        <div className="countHandler">
          <button className="remove" onClick={() => removeToCart(id)}>
            REMOVE
          </button>
        </div>
        <button className="tobuy" onClick={handleBuy}>
          Buy
        </button>
        {/* Call handleBuy on button click */}
      </div>
    </div>
  );
};

export default CartItem;
