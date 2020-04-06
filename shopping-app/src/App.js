import React from 'react';
import './App.css';
import './pages/homepage/homepage.component'
import HomePage from './pages/homepage/homepage.component';
import NavBarFunc from './components/navbar.component';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div>
        <NavBarFunc />
        <HomePage />
      </div>




  );
}

export default App;
