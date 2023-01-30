import styled from "styled-components";
import { CurrentProductProvider } from "./context/CurrentProductContext";
import { CartContextProvider } from "./context/CartContext";
import ProductsPage from "./pages/ProductsPage";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #eeeeee;
  box-sizing: border-box;
  min-height: 100vh;
`

function App() {

  return (
    <StyledApp>
      <CartContextProvider>
        <CurrentProductProvider>
          <ProductsPage />
        </CurrentProductProvider>
      </CartContextProvider>
    </StyledApp>
  );
}

export default App;
