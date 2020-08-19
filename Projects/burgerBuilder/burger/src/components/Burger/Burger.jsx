import React from "react"
import classes from "./Burger.module.css"
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients"

const Burger = (props)=> {
    let transformedIngredient = Object.keys(props.ingredients)
    .map((igKey) => {
        return [...Array(props.ingredients[igKey])].map((_,i)=> {
            return <BurgerIngredients key={igKey + i} type={igKey}/>
        })
    })
    .reduce((prevVal,currVal) => {
        return prevVal.concat(currVal)
    },[])

    if (transformedIngredient.length === 0){
        transformedIngredient = <p>Please start adding ingredents</p>
    }

    console.log(transformedIngredient)
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {transformedIngredient}
            <BurgerIngredients type="bread-bottom" />
        </div>
    )
}

export default Burger