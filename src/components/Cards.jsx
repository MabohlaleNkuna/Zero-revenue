import './Cards.css';
import Checkmark from './Checkmark';


function Cards({ title, message, imgSrc, cardColor, middleImage, paragraph, symbol}) {
  return (
    <div className={`Card ${cardColor}`}>
      <div className="card-header">
        <h1>
          {title} <span className="checkmark">      <Checkmark />
          </span>
        </h1>
        <button className="menu-button" disabled>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </button>
      </div>
      {cardColor === 'red' && (
        <button className="unclickable-button" disabled>
          Revenue
        </button>
      )}
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
