import React, { useContext } from 'react';
import { ShopContext } from '../../context/Shop_context';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export const CartItem = ({ data }) => { // Destructure data directly in function argument
    const { id, productName, price, productImage } = data;
    const { cartItems, addToCart, removeToCart, updateCartItemCount } = useContext(ShopContext);
    const navigate = useNavigate(); // Get the navigate function

    const handleBuy = () => {
        navigate(`/buy/${id}`); // Navigate to the Buy page
    };

    return (
        <div className='cartItem'>
            <img src={productImage} alt="" />
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p><b>{price}</b></p>
                <div className='countHandler'>
                    <button onClick={() => removeToCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
            <button onClick={handleBuy}>Buy</button> {/* Call handleBuy on button click */}
        </div>
    );
};

export default CartItem;
