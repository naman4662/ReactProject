import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [currentTime,setCount] = useState(new Date().toLocaleTimeString())
//   const IncNum = () => {
//     setCount(count + 1 )
//   };

  const IncTime = () => {
    setCount(new Date().toLocaleTimeString())
  }

  setInterval(IncTime,1000)
  return (
    <>
      <div className="main-header">
        {/* <h1>{count}</h1>
        <button onClick={IncNum}> Click Me</button> */}

        <h1>{currentTime}</h1>
        {/* <button onClick={IncTime}> Click Me</button> */}

      </div>
    </>
  );
};

export default App;
