import { useContext } from 'react';

import MealForm from "../MealForm/MealForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext)  
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = amount => {
    cartCtx.addItem({
        id: props.id,
        name: props.name,
        price: props.price,
        amount: amount
    })
  }
  return (
    <li className={classes.meal}>
      <div>
        <h1>{props.name}</h1>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealForm id={props.id} addToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
