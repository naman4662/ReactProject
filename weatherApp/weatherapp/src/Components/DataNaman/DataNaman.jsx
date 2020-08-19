import React from "react";
import { useParams } from "react-router-dom";

const DataNaman = () => {
  let { val } = useParams();
  console.log(val);
  return (
    <>
      <h1>{val}</h1>
    </>
  );
};

export default DataNaman;
