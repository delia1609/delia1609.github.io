import { useCartContext } from "../context/CartContext";

export default function ProductStatus( {product} ) {
  const { getInCart } = useCartContext();

  const productInCart = getInCart(product);

  const count = productInCart?.count ?? 0 // isInCart ? productInCart.count : 0;

  return (
    <div>{count}</div>
  );
}