import React from 'react';
import "./product.scss";
import Card from '../Card/Card';


export default function Product() {
  return (
    <li className='order-product-item'>
        <form className='product-form product-top'>
            <Card item={'product-item'} content={'product-content'} img={'product-img'} title={'product-title'}/>
            <label>
              <input className='product-count' type={'text'} placeholder={0}/>
            </label>
            <p className='product-price'>4.51$</p>
        </form>
    </li>
  )
}
