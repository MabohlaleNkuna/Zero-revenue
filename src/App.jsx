import myImage1 from './components/pic1.jpeg'; // New image for card 1
import myImage2 from './components/pic.jpeg'; // Original image for card 2
import myImage3 from './components/pic2.jpeg'; 
import Cards from './components/Cards';

function App() {
  const title = "Zero";
  return (
    <div className="App">
      <Cards title={title} message="Mommy loves you" imgSrc={myImage3} cardColor="red" />
      <Cards title={title} imgSrc={myImage2} message="Danny Hazelwood" cardColor="black" middleImage />
      <Cards title={title} message="Boost Your Earning Today." imgSrc={myImage1} cardColor="green" />
    </div>
  );
}

export default App;
