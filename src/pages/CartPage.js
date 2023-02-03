import styled from "styled-components";
import { useCartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

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

export default function CartPage() {
  const { cart } = useCartContext();

  let total = 0;

  cart.forEach(element => {
    total += (element.count * element.item.price)
  });

  console.log(cart);

  if (!cart.length > 0) {
    return (
      <div>You cart is empty!</div>
    )
  }   

  return (
    <>
      <Items>
        {cart.map((element) => (
          <CartItem key={element.item.id} item={element} />
        ))}
      </Items>
      <Total>Total: ${Math.round(total * 100) / 100}</Total>
    </>
  );
}