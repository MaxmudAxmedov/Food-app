import React from 'react'
import './card.scss'
import foodImg from "../../assets/images/img/Image1.png"

export default function Card({item, content, img, title, infoText}) {
  return (
    <li className={item}>
        <img className={img} src={foodImg} alt='img'/>
        <div className={content}>
            <h3 className={title}>Spicy seasoned seafood noodles</h3>
            <p className='item-price'>$ 2.29</p>
            <p className='item-info'>{infoText}</p>
        </div>
    </li>
  )
}
