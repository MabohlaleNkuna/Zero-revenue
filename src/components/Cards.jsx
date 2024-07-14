import './Cards.css';

function Cards({ title, message, imgSrc, cardColor, order }) {
  const checkmarkColor = cardColor === 'yellow' ? 'yellow' : cardColor === 'red' ? 'red' : 'black';
  return (
    <div className={`Card ${cardColor}`}>
      {order === 'image-first' ? (
        <>
          <h1> 
            {title} <span className="checkmark" style={{ color: checkmarkColor }}>✔️</span>
          </h1>
          <div className="image-container">
            <img src={imgSrc} alt="card" className="card-image" />
          </div>
          <p>{message}</p>
        </>
      ) : (
        <>
          <h1>
            {title} <span className="checkmark" style={{ color: checkmarkColor }}>✔️</span>
          </h1>
          <p>{message}</p>
          <div className="image-container">
            <img src={imgSrc} alt="card" className="card-image" />
          </div>
        </>
      )}
    </div>
  );
}

export default Cards;