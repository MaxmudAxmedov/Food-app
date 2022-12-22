import React from 'react';
import Card from '../Card/Card';
import "./main.scss";
import foodImg from "../../assets/images/img/Image1.png";

export default function Main() {

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

  ]
  return (
    <main>
      <ul className='list'>
      {
        foodArray.map((item, index) => {
          return <Card key={index} img={item.img} title={item.title} price={item.price} info={item.info}/>
        })
      }
          
      </ul>
    </main>
  )
}
