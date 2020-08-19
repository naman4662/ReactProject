import React from "react";
import "./History.module.css";

const History = () => {
  return (
    <div className="history">
        <h3>History</h3>
        <hr/>
        <ul className="list" id="list">
            <li className="plus">
                Cash<span>+500</span><button className="delete-btn">x</button>
            </li>
            <li className="minus">
                Cash<span>-500</span><button className="delete-btn">x</button>
            </li>
        </ul>
    </div>
  );
};

export default History;
