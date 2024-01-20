import React, { useContext } from 'react'
import { ShopContext } from '../../context/Shop_context';


export const Productitems = (props) => {
    const {id, productName, price, productImage} = props.data;
    const { addToCart, cartItems} = useContext(ShopContext);
    const cartItemsAmount = cartItems[id];
  return (
    <div className='product'>
        <img src={productImage}/>
        <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>
                ${price}
            </p>
        </div>
        <button className='addToCartBttn' onClick={() => addToCart(id)}>
            add to cart {cartItemsAmount > 0 && <> {cartItemsAmount}</>}
            </button>

    </div>
  )
}

export default Productitems