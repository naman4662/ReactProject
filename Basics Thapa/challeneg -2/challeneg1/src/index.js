import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let curDate = new Date();
curDate = curDate.getHours()
let greeting = ""
let cssStyle = {}

if (curDate >= 1 && curDate < 12){
    greeting = "Good Morning"
    cssStyle.color = "green"
}else if(curDate >= 12 && curDate < 8){
  greeting = "Good AfterNoon"
  cssStyle.color = "yellow"
}else{
  greeting = "Good Night"
  cssStyle.color = "grey"
}

ReactDOM.render(
  <React.Fragment>
    <div>
      <h1><span> Hello Sir , <span style={cssStyle}> {greeting} </span>  </span></h1>
      <h1><span> Hello Sir , <span style={cssStyle}> {greeting} </span>  </span></h1>
    </div>
  </React.Fragment>,
  document.getElementById('root')
);
