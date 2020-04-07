import React from 'react';
import { Route, Router } from 'react-router-dom';
import './App.css';
import './pages/homepage/homepage.component'
import HomePage from './pages/homepage/homepage.component';
import NavBarFunc from './components/navbar.component';
import 'bootstrap/dist/css/bootstrap.min.css';

const HatsPage = (props) =>{
  console.log(props)
  return (
    <div>     
      <h1> Hats Page </h1>
  </div>
  )
 
}; 

function App() {
  return (
      <div>
          <Route exact path='/shop/Hats' component={HatsPage} />
          <NavBarFunc />
          <HomePage />
       
      </div>




  );
}

export default App;
