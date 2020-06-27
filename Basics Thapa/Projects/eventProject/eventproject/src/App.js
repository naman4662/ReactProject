import React, { useState } from "react";

const App = () => {
  const [toggleClass, setName] = useState("mydiv");
  const [buttonText, setbuttonText] = useState("Click Me");
  const bgChange = () => {
    console.log(toggleClass)
    if (toggleClass === 'mydiv'){
      setName("mydiv divBack");
      setbuttonText("Ouch");
    }else{
      setName('mydiv')
      setbuttonText("Click Me");
    }
  };

  const bgDoubleClick = () => {
    setbuttonText('Yooo 👍')
  }
  return (
    <>
      <div className={toggleClass}>
        <button onClick={bgChange} onDoubleClick={bgDoubleClick}>{buttonText} </button>
      </div>
    </>
  );
};

export default App;
