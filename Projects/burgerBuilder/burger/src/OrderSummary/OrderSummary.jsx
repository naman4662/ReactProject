import React from "react";
import Auxilliary from "../hoc/Auxiliary";
import Button from "../components/UI/Button/Button"

const OrderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Auxilliary>
      <h3>Your Order Summary</h3>
      <p>Summary for you deleicious order is :</p>
      <ul>{ingredients}</ul>
      <h5>Total Price : $ {props.totalPrice}</h5>
      <p>Continue to checkout</p>
      <Button btnType="Danger" clicked={props.purchaseCancel}>Cancel</Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
    </Auxilliary>
  );
};

export default OrderSummary;
