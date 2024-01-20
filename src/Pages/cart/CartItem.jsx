import React, { useContext } from 'react'
import { ShopContext } from '../../context/Shop_context';




export const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data;
    const{cartItems, addToCart , removeToCart } = useContext(ShopContext)

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
              <input value={cartItems[id]}/>
              <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
        
    </div>
  )
}

export default CartItem