import React from 'react';
import "./product.scss";

export default function Product({img, title, price, priceCount, handlePrice, icon}) {
  return (
    <li className='order-item'>
      <div className='product-top'>
        <div className='product-content'>
          <img className='product-img' src={img} alt={title}/>
          <span className='product-box'>
            <h3 className='product-title'>{title}</h3>
            <p className='product-price'>$ {price}</p>
          </span>
        </div>
        <label>
          <input className='product-count' onChange={handlePrice} type={'text'} placeholder={0}/>
        </label>
        <p className='product-price-count'>$ {priceCount}</p>

        <div className='product-pay'>
          <label>
            <input className='product-input' type='text' placeholder='Order Note...'/>
          </label>
          <button className='product-btn' type='reset'>{icon}</button>
        </div>
      </div>
    </li>
  )
}
