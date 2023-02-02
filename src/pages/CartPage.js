import Products from "../components/Products";
import { useCartContext } from "../context/CartContext";

export default function CartPage() {
  const { cart, getCount } = useCartContext();


  // const products = cart.forEach(element => {
  //   products.push(element.item);
  // });

  // console.log(products);

  return (
    <div>Items in cart: {getCount()}</div>
    // <Products products={products} />
  );
}