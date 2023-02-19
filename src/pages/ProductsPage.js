import { getAllProducts } from "../api/productsApi";
import { useEffect, useState } from "react";
import { Header } from "../components/_styled";
import Loading from "../components/Loading";
import Products from "../components/Products";
import Cards from "../components/Cards";
import { Title, useMantineTheme } from "@mantine/core";

export default function ProductsPage() {
  const theme = useMantineTheme();
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
      <Title color={theme.colors.gray[7]} mb="xl">Products</Title>
      {/* <Products products={products} loading={loading} /> */}
      <Cards products={products} loading={loading}/>
    </>
  );
}