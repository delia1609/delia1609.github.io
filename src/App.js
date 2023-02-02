import styled from "styled-components";
import { CartContextProvider } from "./context/CartContext";
import AppRoutes from "./routes/AppRoutes";

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
        <AppRoutes />
      </CartContextProvider>
    </StyledApp>
  );
}

export default App;
