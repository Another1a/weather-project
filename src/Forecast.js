import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function Forecast(){
    return (
    <div className="forecast-info text-center">
  <div className="row">
    <div className="col-sm-2">
    <div className="forecast-day">
      Wed
      </div>
      <div className="forecast-icon">
      <ReactAnimatedWeather
    icon="CLEAR_DAY"
    color= "#212121"
    size={40}
    animate={true}
  />
      </div>
      <div className="forecast-temp">
      25
      </div>
    </div>


    <div className="col-sm-2">
    <div className="forecast-day">
      Thu
      </div>
      <div className="forecast-icon">
      <ReactAnimatedWeather
    icon="PARTLY_CLOUDY_DAY"
    color= "#212121"
    size={40}
    animate={true}
  />
      </div>
      <div className="forecast-temp">
      23
      </div>
    </div>
    <div className="col-sm-2">
    <div className="forecast-day">
      Fri
      </div>
      <div className="forecast-icon">
      <ReactAnimatedWeather
    icon="RAIN"
    color= "#212121"
    size={40}
    animate={true}
  />
      </div>
      <div className="forecast-temp">
      22
      </div>
    </div>
    <div className="col-sm-2">
    <div className="forecast-day">
      Sat
      </div>
      <div className="forecast-icon">
      <ReactAnimatedWeather
    icon="CLEAR_DAY"
    color= "#212121"
    size={40}
    animate={true}
  />
      </div>
      <div className="forecast-temp">
      23
      </div>
    </div>
    <div className="col-sm-2">
    <div className="forecast-day">
      Sun
      </div>
      <div className="forecast-icon">
      <ReactAnimatedWeather
    icon="CLEAR_DAY"
    color= "#212121"
    size={40}
    animate={true}
  />
      </div>
      <div className="forecast-temp">
      26
      </div>
    </div>
  </div>
</div>
)
}