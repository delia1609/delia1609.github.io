import { Link, NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
margin-top: 10px;
`
const Nav = styled.nav`
display: flex;
gap: 10px;
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #176ad1;

  /* &.active {
    color: firebrick;
  } */
`

export default function Layout() {
  return (
    <div>
      <Nav>
        <StyledNavLink to="/" end>Home</StyledNavLink>
      </Nav>

      <Container>
        <Outlet />
      </Container>
    </div>
  );
}