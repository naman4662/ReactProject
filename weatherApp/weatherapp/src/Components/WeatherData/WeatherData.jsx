import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import CityName from "../CityName/CityName";
import WeatherDetail from "../WeatherDetail/WeatherDetail";

const apikey = "8228bc48055f3e267837c52f2413ff8e";

const axiosInstance = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5",
  timeout: 2000,
});

const WeatherData = () => {
  const [wdata, setWdata] = useState({});
  const [city, setCity] = useState("");

  const getWeatherData = async () => {
    await axiosInstance
      .get(`/weather?q=${city}&units=metric&appid=${apikey}`)
      .then((res) => {
        setWdata(res.data);
      });
  };

  const getCityName = (event) => {
    setCity(event.target.value);
  };

  const getDataOnEnter =(e) => {
    // console.log(e.key)
    if(e.key==="Enter"){
      getWeatherData()
      e.preventDefault()
    }
  }

  return (
    <>
      <Row>
        <Col>
          <CityName cityname={city} getCity={getCityName} getData={getDataOnEnter}  />
        </Col>
        <Col className="mt-3">
          <Button 
            onClick={getWeatherData}
            
            className="w-100"
          >
            Get Weather Details
          </Button>
        </Col>
      </Row>
      <WeatherDetail all_data={wdata} api={apikey}/>
    </>
  );
};

export default WeatherData;
