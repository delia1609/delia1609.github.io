import styled from "styled-components";
import { CartContextProvider } from "./context/CartContext";
import ProductsPage from "./pages/ProductsPage";
import CartStatus from "./components/CartStatus";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";
import Layout from "./components/Layout";
import UserLayout from "./components/UserLayout";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

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
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home /> } />

          <Route path="about" element={<About />} />
          <Route path="user" element={<UserLayout />}> 
            <Route index element={<div>Users List</div>} />
            <Route path="featured" element={<div>Featured Users</div>}/>
            <Route path=":userId" element={<User />}/>
          </Route>
        </Route> 
        {/* {/* <Route path="about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="user/:userId" element={<User />} />
        <Route path="account/:accountId/:userId" element={<User />} />
        <Route path="*" element={<div>Page Not Found</div>} /> 
  </Routes> */}
      <CartContextProvider>
        <CartStatus />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<ProductsPage />} />
              <Route path="product/:productId" element={<ProductDetailsPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          {/* <ProductsPage /> */}
      </CartContextProvider>
    </StyledApp>
  );
}

export default App;
