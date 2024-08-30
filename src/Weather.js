import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function WeatherSearch(props) {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    console.log(response);
    setWeather({
      temperature: response.data.main.temp,
      coord: response.data.coord,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      name: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "cf6b50b908fa2e0baca3eed8a569a5f6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="row">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city.."
          onChange={updateCity}
          autoFocus="on"
        />

        <button className="btn btn-primary" type="Submit">
          Search
        </button>
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <h1>{weather.name}</h1>
        <ul>
          <li>
            <h2>
              <WeatherTemperature celsius={weather.temperature} />
            </h2>
            <div className="col-6">
              <img src={weather.icon} alt={weather.description} />
            </div>
          </li>
          <li className="text-capitalize">{weather.description}</li>
          <li>
            <FormattedDate date={weather.date} />
          </li>
        </ul>
        <div className="row">
          <div className="col-6">
            <ul>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {Math.round(weather.wind)} km/h</li>
            </ul>
          </div>
          <WeatherForecast coordinates={weather.coord} />
        </div>
      </div>
    );
  } else {
    return form;
  }
}
