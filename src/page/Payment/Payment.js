import React from "react";
import './payment.scss';
import {Cash, CreditCard, Paypal} from "../../assets/images/icon/Icons";
import { useNavigate } from 'react-router-dom';
export default function Payment() {
    const navigate = useNavigate();
    return(
        <div className='payment'>
            <div className='payment-content'>
                <div className='payment-info'>
                    <h2 className='payment-title'>Payment</h2>
                    <p className='payment-text'> 3 payment method available</p>
                </div>
                <form className='payment-form'>
                    <h3 className='form-title'>Payment Method</h3>
                    <div className='payment-cards'>
                        <label>
                            <input className='form-radio visually-hidden' type='radio' name='pay' value='creditCard'/>
                            <div className='form-card'>
                                <CreditCard />
                                <p className='card-name'>Credit Card</p>
                            </div>
                        </label>
                        <label>
                            <input className='form-radio visually-hidden' type='radio' name='pay' value='paypal'/>
                            <div className='form-card'>
                                <Paypal />
                                <p className='card-name'>Paypal</p>
                            </div>
                        </label>
                        <label>
                            <input className='form-radio visually-hidden' type='radio' name='pay' value='cash'/>
                            <div className='form-card'>
                                <Cash />
                                <p className='card-name'>Cash</p>
                            </div>
                        </label>
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor='userName'>Cardholder Name</label>
                        <input id='userName' className='user-input' type='text' placeholder='Levi Ackerman' name='userName'/>
                        <label htmlFor='cardNumber'>Card Number</label>
                        <input id='cardNumber' className='user-input' type='number' placeholder='2564 1421 0897 1244' name='cardNumber'/>
                        <div className='form-inputs-box'>

                        </div>
                    </div>
                    <div className='btn-group'>
                        <button className='form-btn btn-close' onClick={() => navigate(-1)}>Cancel</button>
                        <button className='form-btn btn-payment'>Confirm Payment</button>
                    </div>
                </form>
            </div>

        </div>
    )
}