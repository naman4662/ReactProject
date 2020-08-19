import React, { useState,useEffect } from "react";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5",
  timeout: 2000,
});

const WeatherForcast = (props) => {
  const [fData, setFdata] = useState({});
  // const mycity = props.cityname
  // const myap = props.apival
  console.log(props)
  const getForcast = async (props) => {
    await axiosInstance
      .get(`/weather?q=${props.cityname}&cnt=5&appid=${props.myap}`)
      .then((res) => {
        console.log("APi Called")
        setFdata(res.data);
      });
  };
  useEffect(() => {
    getForcast(props)
  },[props])

  if (!props.cityname) {
    return "Loading";
  }
 

  return (
    <>
      <div>{fData.cityname}</div>
    </>
  );
};

export default WeatherForcast;
