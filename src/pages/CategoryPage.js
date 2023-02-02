import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { getProductsInCategory } from "../api/productsApi";
import { Header } from "../components/_styled";
import Products from "../components/Products";

export default function CategoryPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await getProductsInCategory(categoryId);
      setLoading(false);

      setProducts(result);
    })()
  }, [categoryId])

  return (
    <>
      <Header>Category - {categoryId}</Header>
      <Products products={products} loading={loading} />
    </>
  );
}