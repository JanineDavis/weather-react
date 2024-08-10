import "./App.css";
import WeatherSearch from "./Weather";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <WeatherSearch />
      </header>
      <p>
        <a href="https://github.com/JanineDavis/weather-react" target="_blank">
          Git Repo
        </a>
      </p>
    </div>
  );
}
