import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import WeatherData from "./Components/WeatherData/WeatherData";
import Cities from "./Components/Cities/Cities";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import DataNaman from "./Components/DataNaman/DataNaman"


const App = () => {
  return (
    <>
      <Container>
        <Switch>
          <Route exact path="/">
            <Header />
            <WeatherData />
          </Route>
          <Route exact path="/cities">
            <Header />
            <Cities />
          </Route>
          <Route path="/cities/:val" component={DataNaman}/>
        </Switch>
      </Container>
    </>
  );
};


export default App;
