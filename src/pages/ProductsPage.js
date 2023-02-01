import Product from "../components/Product";
import { getAllProducts } from "../api/productsApi";
import { useEffect, useState } from "react";
import { Header } from "../components/_styled";
import styled from "styled-components";
import Loading from "../components/Loading";

const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

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
      <ProductsList>
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
          />
        ))}
      </ProductsList>
    </>
  );
}