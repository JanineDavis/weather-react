import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "445905dadb3d2b0c6f1b916c9d0e3860";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div classNAme="col">
          <div className="WeatherForecast-day">Thur</div>
          <div className="WeatherIcon">Icon</div>{" "}
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-min">19° </span>
            <span className="WeatherForecast-temperature-max">21°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
