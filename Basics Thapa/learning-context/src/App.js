import React, { createContext } from "react";
import "./styles.css";
import ComA from "./ComA.jsx";

const FirstName = createContext();

export default function App() {
  return (
    <div className="App">
      <FirstName.Provider value={"Naman"}>
        <ComA />
      </FirstName.Provider>
    </div>
  );
}

export { FirstName };
