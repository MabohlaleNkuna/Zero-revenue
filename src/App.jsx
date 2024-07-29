// src/App.js
import React, { useState } from 'react';
import Cards from './components/Cards';
import myImage1 from './components/pic1.jpeg';
import myImage2 from './components/pic.jpeg';
import myImage3 from './components/pic2.jpeg';


function App() {
  const [currentCard, setCurrentCard] = useState(0);

  const cardsData = [
    { title: "Zero", message: "2.45%", paragraph: "Average return-Value", imgSrc: myImage3, cardColor: "red" },
    { title: "Zero", message: "Danny Hazelwood", paragraph: "Founder - Zeropay", imgSrc: myImage2, cardColor: "black", middleImage: true },
    { title: "Zero", message: <>Boost<br /> Your Earning <br /> Today</>, paragraph: <>Growth <br /> From 2022 <br /> Today</>, symbol: "ℳ", imgSrc: myImage1, cardColor: "green" }
  ];

  const handleMenuClick = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % cardsData.length);
  };

  return (
    <div className="App">
      <Cards {...cardsData[currentCard]} onMenuClick={handleMenuClick} />
    </div>
  );
}

export default App;
