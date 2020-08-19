import React, { useEffect } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const fetchData = async () => {
    const data = await axios.get("http://127.0.0.1:5501/local/test/");
    console.log(data);
  };

  useEffect(() => {
    fetchData()
  },[])

  return (
    <div className="App">
     <h1>Hello</h1>
    </div>
  );
}

export default App;
