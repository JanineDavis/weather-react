import "./App.css";
import WeatherSearch from "./Weather";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <WeatherSearch />
      </header>
      <a href="https://github.com/JanineDavis/weather-react">Git Repo</a>
    </div>
  );
}

export default App;
