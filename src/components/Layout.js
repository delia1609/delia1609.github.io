import { Link, NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/CartContext";

const Container = styled.div`
margin-top: 10px;
`
const Nav = styled.nav`
display: flex;
justify-content: space-between;
gap: 10px;
min-height: 50px;
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #176ad1;

  /* &.active {
    color: firebrick;
  } */
`

const MainNav = styled.div`
  display: flex;
  gap: 10px;
 
`

export default function Layout() {
  const { getCount } = useCartContext();
  return (
    <div>
      <Nav>
        <MainNav>
          <StyledNavLink to="/" end>Home</StyledNavLink>
          <StyledNavLink to="/categories" end>Categories</StyledNavLink>
        </MainNav>
        <StyledNavLink to="/cart" end>Cart ({getCount()})</StyledNavLink>
      </Nav>

      <Container>
        <Outlet />
      </Container>
    </div>
  );
}