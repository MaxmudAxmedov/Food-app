import React, { useState } from 'react';
import NewFood from '../../components/newFood/NewFood';
import foodImg from "../../assets/images/img/Image1.png";
import Modal from '../../components/Modal/Modal';

import "./hotdish.scss";

export const Hotdish = () => {
  const [modal, setModal] = useState('none');

  const foodArray = [
    {
      img: foodImg,
      title: 'Spicy seasoned seafood noodles',
      price: '2.29',
      info: '20 Bowls available'
    },
    {
      img: foodImg,
      title: 'Spicy seasoned seafood noodles',
      price: '2.29',
      info: '20 Bowls available'
    },
    {
      img: foodImg,
      title: 'Spicy seasoned seafood noodles',
      price: '2.29',
      info: '20 Bowls available'
    },
    {
      img: foodImg,
      title: 'Spicy seasoned seafood noodles',
      price: '2.29',
      info: '20 Bowls available'
    },
    {
      img: foodImg,
      title: 'Spicy seasoned seafood noodles',
      price: '2.29',
      info: '20 Bowls available'
    }
  ]


  return (
    <div>
      <ul className='hotdish-list'>
        <li className='product-add' onClick={() => setModal('block')}>
          <span className='product-add__content'>
            + <br/> Add new dish
          </span>
        </li>

        {
          foodArray.map((item, id) => {
            return <NewFood key={id} src={item.img} title={item.title} price={item.price}/>
          })
        }
      </ul>
   
        <Modal style={{display: modal}} modalShow={() => setModal('none')}/>
  
     
    </div>
  )
}
