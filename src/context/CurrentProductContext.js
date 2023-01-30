import React from "react";
import { useState } from "react";
import { useContext } from "react";

const CurrentProductContext = React.createContext();

export const CurrentProductProvider = ( {children} ) => {
  const [product, setProduct] = useState(null);

  const context = {
    product,
    setProduct
  }

  return (
    <CurrentProductContext.Provider value={context}>
      {children}
    </CurrentProductContext.Provider>
  );
}

export const useCurrentProduct = () => {
  const context = useContext(CurrentProductContext);

  if(!context) {
    throw new Error("useCurrentProduct must be used inside CurrentProductProvider");
  }

  return context;
}

