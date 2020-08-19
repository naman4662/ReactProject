import React from "react";
import "./WeatherDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faSmog,
  faCloudMoon,
  faCloudRain,
  faCloudSun,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import WeatherRightPane from "../WeatherRightPane/WeatherRightPane";
import WeatherForcast from "../WeatherForcast/WeatherForcast";

const WeatherDetail = (props) => {
  // console.log(props.all_data)
  if (!props.all_data.main) {
    return "";
  }
  const findWeatherClass = (weatherClass) => {
    if (weatherClass === "Haze") {
      return {
        weatherFont: (
          <FontAwesomeIcon icon={faSmog} size="5x" className="iconHaze" />
        ),
        weatherName: "haze",
        imgSrc:
          "https://media3.giphy.com/media/26FmSbR30JMS2SChq/200.webp?cid=ecf05e4773v7gdaq1wzx1hjts4823alr16ycrbgl7h9d3nr5&rid=200.webp",
      };
    } else if (weatherClass === "Sunny") {
      return {
        weatherFont: (
          <FontAwesomeIcon icon={faSun} size="5x" className="iconSun" />
        ),
        weatherName: "sunny",
        imgSrc:
          "https://media1.giphy.com/media/o7R0zQ62m8Nk4/200.webp?cid=ecf05e47pvcgf8epei0wkl9qztv0jq82utkmq5nqa3lsgara&rid=200.webp",
      };
    } else if (weatherClass === "Clouds") {
      return {
        weatherFont: (
          <FontAwesomeIcon icon={faCloudMoon} size="5x" className="iconSun" />
        ),
        weatherName: "cloudy",
        imgSrc:
          "https://media1.giphy.com/media/kyU9vCxHNBqwg/200w.webp?cid=ecf05e47vzzr8ypvu69rvzckms92r7olb1ru60pcn77pzd5v&rid=200w.webp",
      };
    } else if (weatherClass === "Rain") {
      return {
        weatherFont: (
          <FontAwesomeIcon icon={faCloudRain} size="5x" className="iconRain" />
        ),
        weatherName: "rain",
        imgSrc:
          "https://media3.giphy.com/media/v0R4uwLqGKvQY/200w.webp?cid=ecf05e47z9xrpy0day70nm8r9tt6hgab0tt2f0gp8u5ha0vu&rid=200w.webp",
      };
    } else if (weatherClass === "Clear") {
      return {
        weatherFont: (
          <FontAwesomeIcon icon={faCloudSun} size="5x" className="iconSun" />
        ),
        weatherName: "clear",
        imgSrc:
          "https://media1.giphy.com/media/RAFOR6gbo1bEc/100.webp?cid=ecf05e47yoqnbl5qdvz1rayi1qr1ccicf3lfo3mjgid6jv1i&rid=100.webp",
      };
    }
  };

  return (
    <>
      <Row>
        <Col lg={6}>
          <div
            className={
              findWeatherClass(props.all_data.weather[0].main).weatherName
            }
          >
            <div className="temp_overlay">
              <div className="weatherType">
                {props.all_data.weather[0].main}
              </div>
              <div className="weatherIcon">
                {findWeatherClass(props.all_data.weather[0].main).weatherFont}
              </div>
              <div className="temperatureNumber">
                {props.all_data.main.temp} &#8451;
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <WeatherRightPane
            all_weather={props.all_data}
            imageData={findWeatherClass(props.all_data.weather[0].main).imgSrc}
          />
        </Col>
      </Row>
      <Row>
        <WeatherForcast cityname={props.all_data.name} apival={props.api} />
      </Row>
    </>
  );
};

export default WeatherDetail;
