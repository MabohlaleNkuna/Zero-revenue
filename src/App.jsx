import myImage from './components/pic.png';
import Cards from './components/Cards';
import React from 'react';

function App() {
  const title = "Zero";
  return (
    <div className="App">
      <Cards title={title} message="Mommy loves you" imgSrc={myImage} cardColor="red" />
      <Cards title={title} imgSrc={myImage} message="Danny Hazelwood" cardColor="black" order="image-first" />
      <Cards title={title} message="Boost Your Earning Today." imgSrc={myImage} cardColor="green" />
    </div>
  );
}

export default App;
