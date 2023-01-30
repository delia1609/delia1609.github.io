import React from "react";
import { useState, useContext } from "react";

const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]); 

  const context = {
    cart,

    addToCart: (product) => {
      const newCart = [...cart];
      const itemInCart = newCart.find(e => e.item.id === product.id);

      if (!itemInCart) {
        const toAdd = {
          item: product, 
          count: 1
        }

        newCart.push(toAdd);
      }

      else {
        itemInCart.count++;
      }

      setCart(newCart);
    },

    isInCart: (product) => {
      return !!cart.find(e => e.item.id === product.id);
    },

    removeOneFromCart: (product) => {
      const newCart = [...cart];
      const itemInCart = newCart.find(e => e.item.id === product.id);

      if (!itemInCart) {
        return;
      }

      itemInCart.count--;
      
      if (itemInCart.count === 0) {
        setCart(newCart.filter(element => element.item.id !== itemInCart.item.id));
      }

      else {
        setCart(newCart);
      }
    }
  }

  // cart
  // {
  //   item: //produs
  //   count: //nr. de produse
  // }

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
