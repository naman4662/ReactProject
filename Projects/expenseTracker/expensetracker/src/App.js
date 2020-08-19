import React from "react";
import "./App.css";
import { Header, Balance, Transaction,History,CreateTransaction } from "./components";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <div className="container">
          <Balance />
          <Transaction />
          <History />
          <CreateTransaction/>
        </div>
      </div>
    </>
  );
};

export default App;
