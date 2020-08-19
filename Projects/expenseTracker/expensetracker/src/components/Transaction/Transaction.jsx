import React from "react";
import "./Transaction.module.css";

const Transaction = () => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +$500.00
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -$500.00
        </p>
      </div>
    </div>
  );
};

export default Transaction;
