import myImage1 from './components/pic1.jpeg'; 
import myImage2 from './components/pic.jpeg'; 
import myImage3 from './components/pic2.jpg'; 
import Cards from './components/Cards';



function App() {
  const title = "Zero";
  return (
    <div className="App">
      <Cards title={title} message="2.45%" paragraph="Average return-Value" imgSrc={myImage3} cardColor="red"  />
      <Cards title={title} imgSrc={myImage2} message="Danny Hazelwood" cardColor="black" middleImage paragraph= "Founder - Zeropay" />
      <Cards title={title} message={ <>Boost<br /> Your Earning <br /> Today</>} paragraph={ <>Growth <br /> From 2022 <br /> Today</>} symbol="ℳ" imgSrc={myImage1} cardColor="green" />
    </div>
  );
}

export default App;
