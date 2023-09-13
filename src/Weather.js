import React from "react";
import './Weather.css';


export default function Weather() {
  return (
    <div className="weather-info">
      <div className="row">
        <div className="col-md-7">
          <h1 id="city">Singapore</h1>
          <ul>
            <li>
              Updated:
              <strong>
                {" "}
                <span id="date"> Monday 10:12</span>{" "}
              </strong>
              <span id="description"></span>
            </li>
            <li>
              Humidity:
              <strong>
                <span id="humidity"> 94</span>%
              </strong>
              , Wind:
              <strong>
                <span id="wind"> 1.54</span>
                m/h
              </strong>
            </li>
          </ul>
        </div>
        <div className="col-md-5">
          <div className="temperature-container d-flex justify-content-start">
            <div className="weather-icon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="cloudy"
                width="70"
                height="70"
                id="icon"
              />
            </div>
            <div>
              <span id="temperature">26</span>

              <span className="units" id="celsius-link">
                {" "}
                <a href="/">°C</a>| <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}