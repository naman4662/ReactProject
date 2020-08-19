import React, { useState } from "react";
import Auxilliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../OrderSummary/OrderSummary";
import Backdrop from "../../components/UI/Backdrop/Backdrop"

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.8,
};
const BurgerBuilder = () => {
  const [ingredient, setIngredient] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });

  const [totalPrice, setTotalPrice] = useState(4);

  const [purchasable, setPurchasable] = useState({
    purchasableInd: true,
  });

  const [ordered, setOrdererd] = useState(false);

  const updatePurchaseind = (data) => {
    //   debugger
    const ingredients = { ...data };
    for (let key in ingredients) {
      if (ingredients[key] > 0) {
        setPurchasable({ purchasableInd: false });
      }
    }
    //   console.log(ingredients)
    //   setPurchasable({ purchasableInd : true})
  };

  const updatePurchasedInd = () => {
    setOrdererd(true);
  };


  const addTyleHandler = (type) => {
    let oldCount = ingredient[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...ingredient,
    };
    updatedIngredients[type] = updatedCount;
    const updatedPrice = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice + updatedPrice;
    setTotalPrice(newPrice);
    console.log(totalPrice.toFixed(2));
    setIngredient(updatedIngredients);
    updatePurchaseind(updatedIngredients);
  };

  const removeIngredientHandler = (type) => {
    let oldCount = ingredient[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...ingredient,
    };
    updatedIngredients[type] = updatedCount;
    const updatedPrice = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice - updatedPrice;
    setTotalPrice(newPrice);
    console.log(totalPrice.toFixed(2));
    setIngredient(updatedIngredients);
    updatePurchaseind();
  };

  const purchaseContinue = () => {
      alert("Continue Purchase")
  }


  const closeModal= ()=>{
      setOrdererd(false)
  }
  const disabledInfo = {
    ...ingredient,
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  return (
    <Auxilliary>
      <Modal show={ordered}>
        <OrderSummary ingredients={ingredient} 
            purchaseContinue={purchaseContinue}
            purchaseCancel={closeModal}
            totalPrice={totalPrice.toFixed(2)}

        />
      </Modal>
      <Backdrop show={ordered} clicked={closeModal}>
      </Backdrop>
      <Burger ingredients={ingredient} />
      <BuildControls
        removeIng={removeIngredientHandler}
        addIngredient={addTyleHandler}
        disabled={disabledInfo}
        totalPrice={totalPrice.toFixed(2)}
        purchasable={purchasable}
        purchased={updatePurchasedInd}
        
      />
      
    </Auxilliary>
  );
};

export default BurgerBuilder;
