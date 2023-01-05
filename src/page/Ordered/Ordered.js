import React from 'react';
import Product from '../../components/ProductOrder/Product';
import "./ordered.scss";

import foodImg from "../../assets/images/img/Image1.png";
import ApexChart from '../../components/Apex/ApexChart';


export default function Ordered() {
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
        }
    ]

  return (
    <div className='ordered'>
        <div className='ordered-top'>
            <div className='ordered-top__content'>
                <h2 className='ordered-title'>Most Ordered</h2>
                <select className='ordered-select'>
                    <option>Today</option>
                </select>
            </div>
            <ul className='ordered-list'>
                {
                    foodArray.map((item, index) => {
                        return <li className='ordered-item' key={index}>
                            <img className='ordered-item-img' src={item.img}/>
                            <span className='item-content'>
                                <p className='content-title'>{item.title}</p>
                                <p className='content-info'>{item.info}</p>
                            </span>
                        </li> 
                    })
                }
            </ul>
            <a className='ordered-view' href='/'>View All</a>
        </div>

        <div className='ordered-top ordered-bottom'>
            <div className='ordered-top__content'>
                <h2 className='ordered-title'>Most Type of Order</h2>
                <select className='ordered-select'>
                    <option>Today</option>
                </select>
            </div>
            <div className='ordered-apex'>
                <ApexChart />
            </div>
        </div>
    </div>
  )
}
