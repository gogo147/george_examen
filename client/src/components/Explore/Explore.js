import React from 'react';
import '../styles/Explore.css';
import { Link } from 'react-router-dom';

const Explore = ({ title, titleTwo, titleThree, text, price, priceTwo, priceThree, image, imageTwo, imageThree} ) => {
  return (    
    <div name='explore' className='con_ex'>
        <Link to='../Product'>
        <div className='card'>
            <div className='image-content'>
                <img className='overlay' src={image} />
                <div className='card-image'>
                </div>
            </div>

            <div className='card-content'>
            <h2 className='name'>{title}</h2>
                <p className='description'>
                    {text}
                </p>

                <button className='button'>{price}</button>
            </div>
        </div> 
        </Link>

        <Link to='../Product2'>
        <div className='card2'>
            <div className='image-content'>
            <img className='overlay2' src={imageTwo} />

                <div className='card-image'>
                </div>
            </div>

            <div className='card-content'>
                <h2 className='name'>{titleTwo}</h2>
                <p className='description'>
                    {text}
                </p>

                <button className='button'>{priceTwo}</button>
            </div>
        </div>
        </Link>

        <Link to='../Product3'>
        <div className='card3'>
            <div className='image-content'>
            <img className='overlay2' src={imageThree}  />

                <div className='card-image'>
                </div>
            </div>

            <div className='card-content'>
                <h2 className='name'>{titleThree}</h2>
                <p className='description'>
                    {text}
                </p>

                <button className='button'>{priceThree}</button>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default Explore