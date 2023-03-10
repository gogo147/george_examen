import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/button.css';
import '../styles/Info.css';

const Product = ({ title, text, reverse, image, button, price, contact }) => {
  return (

    <div className='Section' name='info'>
      <div className='Container'>
        <div className='ColumnLeft'>
          <h1 className='info_h1'>{title}</h1>
          <p className='info_p'>{text}</p>
          <h1 className='info_h1'>{price}</h1>
          <Link to='../Main' className='Button_product'>
            {button}   
          </Link>
          <div className='contact_btn'>
            {contact}   
          </div>

        </div>
        <div className='ColumnRight' reverse={reverse}>
          <img className='img' src={image} />
        </div>
        
      </div>
    </div>    
  )}

export default Product