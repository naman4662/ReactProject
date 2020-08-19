import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price : $ <strong>{props.totalPrice}</strong>
      </p>
      {controls.map((item) => (
        <BuildControl
          key={item.label}
          label={item.label}
          addMore={() => props.addIngredient(item.type)}
          removeIt={() => {
            props.removeIng(item.type);
          }}
          disabled={props.disabled[item.type]}
        />
      ))}

      <button
        className={classes.OrderButton}
        disabled={props.purchasable["purchasableInd"]}
        onClick={props.purchased}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
