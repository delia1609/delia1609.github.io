import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";
import { getAllProducts } from "../api/productsApi";
import { useContext } from "react";
import CurrentProductContext from "../context/CurrentProductContext";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { product } = useContext(CurrentProductContext);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      const data = await getAllProducts();

      setLoading(false);
      setProducts(data);
    }

    getData();
  }, []);

  return (
    <>
    {product ?
          <ProductDetails product={product} /> :
          <Products products={products} loading={loading} />}
    </>
  );
}