import React, { Component } from "react";
import "./App.css";
import Getcards from "./Getcards"

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <h1 >Deck App</h1>
          <Getcards/>
        </div>
      </>
    );
  }
}
export default App;
