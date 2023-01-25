import Products from "./components/Products";
import styled from "styled-components";
import ProductDetails from "./components/ProductDetails";
import { useState } from "react";

const StyledApp = styled.div`
padding: 20px;
background-color: #eee;
box-sizing: border-box;
min-height: 100vh;
`
function App() {
  const [productClick, setProductClick] = useState();

  const handleProductClick = (product) => {
    setProductClick(product);
  }

  return (
    <StyledApp>
      {productClick ?
        <ProductDetails product={productClick} />
        : <Products onClick={handleProductClick} />}
    </StyledApp>
  );
}

export default App;
