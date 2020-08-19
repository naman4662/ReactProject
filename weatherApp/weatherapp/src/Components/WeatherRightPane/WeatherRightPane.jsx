import React from "react";
import "./WeatherRightPane.css";

const WeatherRightPane = (props) => {
  console.log(props.all_weather);
  console.log(props.imageData);
  const mainWeatherData = props.all_weather.main;
  return (
    <>
      <div className="main_body">
        <ul className="main_list">
          <li>City - {props.all_weather.name}</li>
          <li>Max Temperature - {mainWeatherData.temp_max}&#8451; </li>
          <li>Min Temperature - {mainWeatherData.temp_min}&#8451; </li>
          <li>Feels Like Temperature - {mainWeatherData.feels_like}&#8451; </li>
        </ul>
        <div>
          <img src={props.imageData} alt="weather type" />
        </div>
      </div>
    </>
  );
};

export default WeatherRightPane;
