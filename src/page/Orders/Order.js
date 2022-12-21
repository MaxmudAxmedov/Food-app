import React, { useState } from 'react'
import "./order.scss"
import Product from '../../components/ProductOrder/Product';
import foodImg from "../../assets/images/img/Image1.png";
import Icons from '../../assets/images/icon/Icons';

export default function Order() {

    const [price, setPrice] = useState(JSON.parse(localStorage.getItem('price')) || 0);

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
    
    function handlePrice(evt){
        const priceCount = evt.target.value * foodArray[0].price;
        setPrice(priceCount);
    }

    localStorage.setItem('price', JSON.stringify(price));

  return (
    <div className='order'>
        <div className='order-top'>
            <h2 className='order-title'>Orders #34562</h2>
            <div className='order-btns'>
                <button className='order-btn'>Dine In</button>
                <button className='order-btn'>To Go</button>
                <button className='order-btn'>Delivery</button>
            </div>
            <div className='order-type'>
                <h3 className='order-item-title'>Item</h3>
                <h3 className='order-item-title'>Qty</h3>
                <h3 className='order-item-title'>Price</h3>
            </div>
        </div>
        <form>
            <ul className='order-list'>
                {
                    foodArray.map((item, index) => {
                        const title = item.title.split(' ', 2).join(' ');
                        return <Product key={index} img={item.img} title={title} price={item.price} priceCount={price} handlePrice={handlePrice} icon={<Icons />}/>
                    })
                }
                
            </ul>

            <div className='order-pay'>
                <span className='pay-info'>
                    <p className='pay-text'>Discount</p>
                    <p className='pay-count'>$ 0</p>
                </span>
                <span className='pay-info'>
                    <p className='pay-text'>Sub total</p>
                    <p className='pay-count'>{price}</p>
                </span>
                <button className='order-pay-btn'>Continue to Payment</button>
            </div>
        </form>
    </div>
  )
}
