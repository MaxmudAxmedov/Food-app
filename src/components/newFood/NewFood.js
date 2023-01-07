import React from 'react';
import "./newFood.scss"

export default function NewFood({src, title, price}) {
  return (
    <li className='food-item'>
        <img className='food-item__img' src={src} alt={title}/>
        <div className='food-item__content'>
            <h3 className='item__content-title'>{title}</h3>
            <p className='item__content-price'>{price}</p>
        </div>
        <a className='food-item__edit'>Edit dish</a>
    </li>
  )
}
