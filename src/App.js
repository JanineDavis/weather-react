import logo from "./logo.svg";
import "./App.css";
import WeatherSearch from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi Tennille</h1>
        <WeatherSearch />
      </header>
    </div>
  );
}

export default App;
