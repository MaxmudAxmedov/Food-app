import React from 'react';
import './card.scss';

export default function Card({img, title, price, info}) {
  return (
    <li className="item">
        <img className='item-img' src={img} alt='img'/>
        <div className='item-content'>
            <h3 className='item-title'>{title}</h3>
            <p className='item-price'>$ {price}</p>
            <p className='item-info'>{info}</p>
        </div>
    </li>
  )
}
