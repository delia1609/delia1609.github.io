import { getAllProducts } from "../api/productsApi";
import { useEffect, useState } from "react";
import { Header } from "../components/_styled";
import Loading from "../components/Loading";
import Products from "../components/Products";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      const data = await getAllProducts();

      setLoading(false);
      setProducts(data);
    }

    getData();
  }, []);

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <Header>Products</Header>
      <Products products={products} loading={loading} />
    </>
  );
}