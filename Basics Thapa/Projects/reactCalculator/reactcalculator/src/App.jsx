import React from 'react';
import * as cal from './Calculate'

function calculateData(){
    return (
        <ol>
            <li>Sum of numbers {cal.default(10,20)} </li>
            <li>Diff of numbers {cal.sub(10,20)}</li>
            <li>Div of numbers {cal.div(10,20)} </li>
            <li>Mul of numbers {cal.mul(10,20)}</li>
        </ol>
    )
}

export default calculateData
