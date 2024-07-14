import './Cards.css';

function Cards({ title, message, imgSrc, cardColor, middleImage }) {
  return (
    <div className={`Card ${cardColor}`}>
      <div className="card-header">
        <h1>
          {title} <span className="checkmark"></span>
        </h1>
        <button className="menu-button" disabled>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </button>
      </div>
      {middleImage ? (
        <>
          <div className="image-container">
            <img src={imgSrc} alt="card" className="card-image" />
          </div>
          <p>{message}</p>
        </>
      ) : (
        <>
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
