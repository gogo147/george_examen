import React from 'react';
import '../styles/Info.css';

const InfoSection = ({ title, text, reverse, image }) => {
  return (

    <div className='Section' name='info'>
      <div className='Container'>
        <div className='ColumnLeft'>
          <h1 className='info_h1'>{title}</h1>
          <p className='info_p'>{text}</p>
        </div>
        <div className='ColumnRight' reverse={reverse}>
          <img className='img' src={image} />
        </div>
      </div>
    </div>    
  )}

export default InfoSection