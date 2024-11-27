import "./App.css";
import NavBar from "./components/NavBar";
import IntroEmail from "./components/IntroEmail";
import PlansSection from "./components/PlansSection"; // Corrected import
import BottomPart from "./components/BottomPart";

function App() {
  return (
    <div className="App">
      <NavBar />
      <IntroEmail />
      <PlansSection />
      <BottomPart />
    </div>
  );
}

export default App;
