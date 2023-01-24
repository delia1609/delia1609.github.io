import Products from "./components/Products";
import styled from "styled-components";

const StyledApp = styled.div`
padding: 20px;
background-color: #eee;
box-sizing: border-box;
min-height: 100vh;
`
function App() {
  return (
    <StyledApp>
      <Products />
    </StyledApp>
  );
}

export default App;
