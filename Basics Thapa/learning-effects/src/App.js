import React, { useState, useEffect } from "react";
import "./styles.css";

const App = () => {
  const [val, setVal] = useState(0);
  const [vals, setVals] = useState(0);
  const title = document.getElementsByTagName("title");
  useEffect(() => {
    // title[0].innerText = "naman";
  }, [vals]);

  const incr = () => {
    setVal(val + 1);
  };

  const incr2 = () => {
    setVals(vals + 2);
    title[0].innerText = `you clicked ${vals} times`;
  };
  return (
    <>
      <h1>Hello World</h1>
      <h1>{val}</h1>
      <h1>{vals}</h1>
      <button onClick={incr}>Add one</button>
      <button onClick={incr2}>Add Vals</button>
    </>
  );
};

export default App;
