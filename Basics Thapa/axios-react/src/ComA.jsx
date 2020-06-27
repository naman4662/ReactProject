import React, { useState, useEffect } from "react";
import axios from "axios";

const ComA = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    async function getData() {
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(data.data.name);
      setName(data.data.name);
    }
    getData();
  });

  const selectBox = event => {
    console.log(event.target.value);
    setNum(event.target.value);
  };

  return (
    <>
      <p> Welcome </p>
      <h3> You select {num} number </h3>
      <h3> You select {name} number </h3>
      <select name="pokemon" id="pokemon" value={num} onChange={selectBox}>
        <option value="-">-</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="25">25</option>
        <option value="33">33</option>
      </select>
    </>
  );
};

export default ComA;
