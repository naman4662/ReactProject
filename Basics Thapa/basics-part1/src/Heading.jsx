import React from 'react';

const heading = {
    textAlign: "center",
    textShadow: "black",
    color: "coral",
    backgroundImage: 'url("https://images.unsplash.com/photo-1592251170867-20bd9ffeec3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")'
  }
const name = "Naman"

function Heading(){
    return <h1 style={heading}>Hello {name}</h1>
}

export default Heading;