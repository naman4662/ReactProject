import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const instance = axios.create({
  baseURL: "https://wft-geo-db.p.rapidapi.com/v1/",
  timeout: 1000,
  headers: {
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
    "x-rapidapi-key": "2a1aaea728msh716d7ba3053c4c3p1488e8jsndaaf55466080",
  },
});

const Cities = () => {
  const [citylist, setCitylist] = useState([]);

  useEffect(() => {
    const getCityList = async () => {
      await instance.get("geo/countries?limit=10").then((res) => {
        setCitylist(res.data.data);
      });
    };
    getCityList();
  }, []);

  const renderList = citylist.map((x,id) => {
    return <ListGroup.Item key={id}><Link  to={`/cities/${id}`}>{x.name}</Link></ListGroup.Item>;
  });
  return (
    <>
      <h1>Cities List</h1>
      <ListGroup>{renderList}</ListGroup>
    </>
  );
};

export default Cities;
