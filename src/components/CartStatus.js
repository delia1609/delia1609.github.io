import { useCartContext } from "../context/CartContext";

function getItemsCount(cart) {
  let sum = 0;

  cart.forEach(element => {
    sum += element.count;
  })

  return sum;
}

export default function CartStatus() {
  const { cart } = useCartContext();

  const allItems = getItemsCount(cart);

  console.log(allItems);

  return (
    <div>{allItems}</div>
  );
}