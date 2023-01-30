import React from "react";
import { useState, useContext } from "react";

const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const context = {
    cart,
    addToCart: (product) => {
      const newCart = [...cart];
      newCart.push(product);
      setCart(newCart)
    }
  }

  return (
    <CartContext.Provider value={context}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => {
  const context = useContext(CartContext);

  if(!context) {
    throw new Error("useCartContext must be used inside CartContextProvider");
  }

  return context;
}
