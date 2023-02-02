import { useEffect } from "react";
import { useState } from "react";
import { getFeaturedProducts } from "../api/productsApi";
import Products from "../components/Products";

export default function CategoriesPage() {
  const [featuredProducts, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true); 
      const result = await getFeaturedProducts();
      setLoading(false);

      setCategories(result);
    })();
  } ,[]);

  return (
    <>
      <h1>Featured Products per Categories</h1>
      <Products products={featuredProducts} loading={loading}/>
    </>
  );
}