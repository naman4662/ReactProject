import React, { useContext } from "react";
import { FirstName } from "./App";

const ComB = () => {
  const fName = useContext(FirstName);

  return <h1>{fName}</h1>;
};

export default ComB;
