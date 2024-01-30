import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import {Productitems} from './Productitems'
import './Shop.css'
import { ShopContext } from '../../context/Shop_context'

const Shop = () => {
  const {username} = useContext(ShopContext);
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>RAJU SHOP</h1>
            <h5>Welcome, {username}</h5>


        </div>
        <div className='products'>
            {PRODUCTS.map((product, index) => 
            (<Productitems key={index} data={product} />))}

        </div>


    </div>
  )
}

export default Shop