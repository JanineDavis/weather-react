import React from "react";

export default function WeatherForecast() {
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
