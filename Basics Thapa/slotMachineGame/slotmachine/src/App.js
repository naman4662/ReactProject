import React from "react";
import './index.css';
import SlotM from './SlotM'

const App = () => {
  return (
    <>
      <h1 className="heading_style">
        🎰 Welcome to <span style = {{fontWeight:"bold"}}>Slot Machine Games</span> 🎰{" "}
      </h1>
      <div className="slot_machine">
        <SlotM x = '😃' y = '😃' z = '😃'/>
        <SlotM x = '😋' y = '😃' z = '😃'/>
        <SlotM x = '😋' y = '😃' z = '😃'/>
        <SlotM x = '😋' y = '🍌' z = '😃'/>
      </div>
      
    </>
  );
};

export default App;
