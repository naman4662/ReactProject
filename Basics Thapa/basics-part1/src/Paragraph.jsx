import React from 'react';


function Paragraph(){
    return <p>Top 5 series - {((Math.random()*10).toFixed(1) )}</p>
}

export default Paragraph;