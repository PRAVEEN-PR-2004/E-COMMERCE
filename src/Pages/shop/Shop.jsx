import React from 'react'
import { PRODUCTS } from '../../products'
import {Productitems} from './Productitems'
import './Shop.css'

const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>RAJU SHOP</h1>


        </div>
        <div className='products'>
            {PRODUCTS.map((product) => 
            (<Productitems data={product} />))}

        </div>


    </div>
  )
}

export default Shop