import React, { useContext, useState } from "react";

const WishlistContext = React.createContext();

export const WishlistContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const context = {
    //   wishlist 

    // {
    //   item: //produs
    //   count: 1 
    // }
    wishlist,

    addToWishlist: (product) => {
      const newWishlist = [...wishlist];
      const itemInWishlist = newWishlist.find(e => e.item.id === product.id);

      if (!itemInWishlist) {
        const toAdd = {
          item: product,
          count: 1
        }

        newWishlist.push(toAdd);
      }

      setWishlist(newWishlist);
    },

    getItemsCount: () => {
      let sum = 0;
      wishlist.forEach(element => sum += element.count);
      return sum;
    },

    getInWishlist: (product) => {
      return wishlist.find(e => e.item.id === product.id);
    },

    isInWishlist: (product) => (
      !!context.getInWishlist(product)
    ),

    removeOneFromWishlist: (product) => {
      const newWishlist = [...wishlist];
      const itemInWishlist = newWishlist.find(e => e.item.id === product.id);

      if (!itemInWishlist) {
        return;
      }

      setWishlist(newWishlist.filter(element => element.item.id !== itemInWishlist.item.id));
    }
  }

  return (
    <WishlistContext.Provider value={context}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlistContext = () => {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error("useWishlistContext must be used inside WishlistContextProvider");
  }

  return context;
}