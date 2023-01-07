import React, { useState } from 'react';
import "./modal.scss"

export default function Modal({style, modalShow}) {
 
  return (
    <div className='modal' style={style}>
    {console.log(style)}
        <form className='modal-form'>
            <h2 className='modal-title'>Add new product item to list</h2>
            <a className='modal-close' onClick={modalShow}>X</a>
            <label>
                <input className='modal-input' type="text" placeholder="Product name" />
            </label>
            <label>
                <input className='modal-input' type="text" placeholder="Product bowls" />
            </label>
            <label>
                <input className='modal-input' type="text" placeholder="Product price" />
            </label>
            <select className='modal-select'>
                <option>Product category </option>
            </select>
            <label>
                <input className='modal-input' type="file" placeholder="Product price" />
            </label>
            <div className='modal-box'>
                <a className='modal-btn modal-close__btn'>Cancel</a>
                <button className='modal-btn modal-add__btn'>Add</button>
            </div>
        </form>
    </div>
  )
}
