import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { useContext, useState } from "react";
function Cart(props) {
  const cartCtx = useContext(CartContext);
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  function orderHandler() {
    setIsCheckout(true);
  }
  function cartRefreshHandler(){
    props.onHideCart();
    cartCtx.refreshCart();
  }
  async function dataSubmitHandler(details) {
    setIsSubmitting(true);
    await fetch(
      "https://react-food-3bf84-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          userData: details,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
  }

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));
  return (
    <Modal hideCart={props.onHideCart}>
      {!isSubmitting && !didSubmit && (
        <>
          <ul className={classes["cart-items"]}>{cartItems}</ul>
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>${cartCtx.totalAmount}</span>
          </div>
          {isCheckout && (
            <Checkout
              onClose={props.onHideCart}
              onDataSubmit={dataSubmitHandler}
            />
          )}
          {!isCheckout && (
            <div className={classes.actions}>
              <button
                className={classes["button-alt"]}
                onClick={props.onHideCart}
              >
                Close
              </button>
              <button className={classes.button} onClick={orderHandler}>
                Order
              </button>
            </div>
          )}
        </>
      )}
      {isSubmitting && (
        <h2 style={{ textAlign: "center" }}>Processing your order...</h2>
      )}
      {didSubmit && (
        <>
          <h2 style={{ textAlign: "center" }}>
            Successfully sent the order data!
          </h2>
          <div className={classes.actions}>
            <button className={classes.button} onClick={cartRefreshHandler}>
              Close
            </button>
          </div>
        </>
      )}
    </Modal>
  );
}

export default Cart;
