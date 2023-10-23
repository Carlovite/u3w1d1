import logo from "./logo.svg";
import "./App.css";
import Buttone from "./Components/ButtonComponent";
import ImageCompo from "./Components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Buttone buttonText="Ciao" />
        <ImageCompo src="https://placedog.net/100" />
      </header>
    </div>
  );
}

export default App;
