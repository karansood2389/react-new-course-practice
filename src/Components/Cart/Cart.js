import { useContext } from "react";
import CartContext from "../../store/cart-context";

import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalPrice = `$${cartCtx.totalAmount.toFixed(2)}`;
  const showOrderButton = cartCtx.items.length !== 0;
  const addItemHandler = (itm) => {
    cartCtx.addItem({ ...itm, amount: 1 });
  };
  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((itm) => (
        <CartItem
          id={itm.id}
          name={itm.name}
          price={itm.price}
          amount={itm.amount}
          onAdd={addItemHandler.bind(null, itm)}
          onRemove={removeItemHandler.bind(null, itm.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Items</span>
        <span>{totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {showOrderButton && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
