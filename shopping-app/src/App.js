import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import './pages/homepage/homepage.component'
import HomePage from './pages/homepage/homepage.component';
import NavBarFunc from './components/navbar.component';
import ShopPage from './pages/shop/shop.component';
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
        <NavBarFunc />
        <Switch> 
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
        </Switch>
          
                 
      </div>




  );
}

export default App;
