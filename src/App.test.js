// src/components/Cards.jsx
import React from 'react';
import './Cards.css';

function Cards({ title, message, paragraph, imgSrc, cardColor, middleImage, symbol }) {
  return (
    <div className={`Card ${cardColor}`}>
      <div className="card-header">
        <h1>{title}</h1>
      </div>
      {middleImage ? (
        <>
          <div className="image-container">
            <img src={imgSrc} alt="card" className="card-image" />
          </div>
          <h2>{message}</h2>
          <p>{paragraph}</p>
        </>
      ) : (
        <>
          <h2>{message}</h2>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="symbol">{symbol}</span>
            <p>{paragraph}</p>
          </div>
          <div className="image-container">
            <img src={imgSrc} alt="card" className="card-image" />
          </div>
        </>
      )}
    </div>
  );
}

export default Cards;
