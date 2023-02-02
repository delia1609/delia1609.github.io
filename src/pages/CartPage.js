import { useCartContext } from "../context/CartContext";

export default function CartPage() {
  const { getCount } = useCartContext();

  return (
    <div>Items in cart: {getCount()}</div>
  );
}