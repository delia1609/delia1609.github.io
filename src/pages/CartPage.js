import styled from "styled-components";
import { useCartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import MantineCartItem from "../components/MantineCartItem";
import { Link } from "react-router-dom";
import { Text } from "@mantine/core";
import CategoriesPage from "./CategoriesPage";

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Total = styled.div`
  margin-top: 20px;
  font-size: 1.2em;
  text-align: right;
`

const StyledDiv = styled.div`
  margin-bottom: 100px;
`

export default function CartPage() {
  const { cart } = useCartContext();

  let total = 0;

  cart.forEach(element => {
    total += (element.count * element.item.price)
  });

  console.log(cart);

  if (!cart.length > 0) {
    return (
      <>
        <StyledDiv>You cart is empty. To add products to cart please <Text variant="link" component={Link} to="/">go back to the store.</Text></StyledDiv>
        <CategoriesPage/>
      </>
    )
  }

  return (
    <>
      <Items>
        {cart.map((element) => (
          <Link to={`/product/${element.item.id}`} style={{ textDecoration: "none" }}>
            <MantineCartItem key={element.item.id} item={element} />
          </Link>
          // <CartItem key={element.item.id} item={element} />
        ))}
      </Items>
      <Total>Total: ${Math.round(total * 100) / 100}</Total>
    </>
  );
}