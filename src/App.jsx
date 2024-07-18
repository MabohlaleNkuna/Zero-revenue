import React, { useState } from 'react';
import myImage1 from './components/pic1.jpeg';
import myImage2 from './components/pic.jpeg';
import myImage3 from './components/pic2.jpg';
import Cards from './components/Cards';


function App() {
  const title = "Zero";
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    { title, message: "2.45%", paragraph: "Average return-Value", imgSrc: myImage3, cardColor: "red" },
    { title, message: "Danny Hazelwood", paragraph: "Founder - Zeropay", imgSrc: myImage2, cardColor: "black", middleImage: true },
    { title, message: <>Boost<br /> Your Earning <br /> Today</>, paragraph: <>Growth <br /> From 2022 <br /> Today</>, symbol: "ℳ", imgSrc: myImage1, cardColor: "green" }
  ];

  const handleMenuClick = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
  };

  return (
    <div className="App">
      <div className="menu-button-container">
        <button className="menu-button" onClick={handleMenuClick}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </button>
      </div>
      {cards.map((card, index) => (
        <div key={index} style={{ display: currentCard === index ? 'block' : 'none' }}>
          <Cards {...card} />
        </div>
      ))}
    </div>
  );
}

export default App;
