import React from 'react'
import "./order.scss"
import Product from '../../components/ProductOrder/Product'

export default function Order() {
  return (
    <div className='order'>
        <h2 className='order-title'>Orders #34562</h2>
        <div className='order-btns'>
            <button className='order-btn'>Dine In</button>
            <button className='order-btn'>To Go</button>
            <button className='order-btn'>Delivery</button>
        </div>
        <ul className='order-list'>
            <li className='order-list-item'>
                <h3 className='order-item-title'>Item</h3>
                <h3 className='order-item-title'>Qty</h3>
                <h3 className='order-item-title'>Price</h3>
            </li>
            <li className='order-list-item'>
                <ul className='order-product'>
                    <Product />
                </ul>
            </li>
        </ul>
    </div>
  )
}
