import React from "react";
import "./styles.css";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";

const App = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/aboutus" component={Aboutus} />
        <Route exact path="/contactus" component={Contactus} />
      </Switch>
    </>
  );
};

export default App;
