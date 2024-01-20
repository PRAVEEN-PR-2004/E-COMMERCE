import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import CartItem from './CartItem'
import { ShopContext } from '../../context/Shop_context'
import { useNavigate} from 'react-router-dom'



import './cart.css'

const Cart = () => {
  const navigate = useNavigate();
  const {cartItems } = useContext(ShopContext)
  return (
    <div className='cart'>
      <h1>
        Your Cart Items
      </h1>
      <div className='cartItems'>
        {PRODUCTS.map((product)=> {
          if(cartItems[product.id] !== 0)
          {
            return <CartItem data={product}/>
          }     
})}
      </div>
      

      <button onClick={() => navigate("/")}>CONTINUE SHOPING</button>
      </div>

  )
}

export default Cart