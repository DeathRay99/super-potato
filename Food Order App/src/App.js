import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import { useState } from "react";
function App() {
  const[cartIsShown,setCartIsShown]=useState(false);
  function cartVisibilityHandler(){
    setCartIsShown(true);
  }
  function hideCartHandler(){
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown&&<Cart onHideCart={hideCartHandler}/>}
      <Header onCartVisibility={cartVisibilityHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
