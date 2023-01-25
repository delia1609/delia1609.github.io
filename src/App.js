import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import { useState } from "react";
import { Box } from "@mui/system";

function App() {
  const [productClick, setProductClick] = useState();

  const handleProductClick = (product) => {
    setProductClick(product);
  }

  return (
    <Box p={2} bgcolor="#eee" minHeight="100vh">
      {productClick ?
        <ProductDetails product={productClick} />
        : <Products onClick={handleProductClick} />}
    </Box>
  );
}

export default App;
