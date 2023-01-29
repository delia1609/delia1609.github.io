import { useState } from "react";
import styled from "styled-components";
import CurrentProductContext from "./context/CurrentProductContext";
import ProductsPage from "./pages/ProductsPage";

const StyledApp = styled.div`
  padding: 20px;
  background-color: #eeeeee;
  box-sizing: border-box;
  min-height: 100vh;
`

function App() {
  const [product, setProduct] = useState(null);

  const context = { product, setProduct }

  return (
    <StyledApp>
      <CurrentProductContext.Provider value={context}>
        <ProductsPage />
      </CurrentProductContext.Provider>
    </StyledApp>
  );
}

export default App;
