import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.name}</h1>
      <ul>
        <li>Temperature: {Math.round(props.data.temperature)}°C</li>
        <li className="text-capitalize">
          Description: {props.data.description}
        </li>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={props.data.icon} alt={props.data.description} />
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: {props.data.rain}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
