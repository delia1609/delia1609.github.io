import { Title, useMantineTheme } from "@mantine/core";
import { useEffect } from "react";
import { useState } from "react";
import { getFeaturedProducts } from "../api/productsApi";
import Cards from "../components/Cards";
import Products from "../components/Products";

export default function CategoriesPage() {
  const [featuredProducts, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const theme = useMantineTheme();

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
      <Title color={theme.colors.gray[7]} mb="xl">Featured Products</Title>
      <Cards products={featuredProducts} loading={loading}/>
    </>
  );
}