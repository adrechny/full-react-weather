import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container">
        <h1>{props.data.city}</h1>
        <div className="row currently mt-4">
          <div className="col-4">
            <ul>
              <li>Last Updated:</li>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
              <li className="text-capitalize">{props.data.description}</li>
            </ul>
          </div>
          <div className="col-4">
            <div className="clearfix">
              <span>
                <WeatherTemperature celsius={props.data.temperature} />
              </span>
              <span>
                <WeatherIcon code={props.data.icon} size={50} />
              </span>
            </div>
          </div>
          <div className="col-4">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
