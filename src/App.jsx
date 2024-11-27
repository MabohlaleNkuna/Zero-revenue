import "./App.css";
import NavBar from "./components/NavBar";
import IntroEmail from "./components/IntroEmail";
import CardsSection from "./components/CardsSection";
import BottomPart from "./components/BottomPart";

function App() {
  return (
    <div className="App">
      <NavBar />
      <IntroEmail />
      <CardsSection />
      <BottomPart />
    </div>
  );
}

export default App;
