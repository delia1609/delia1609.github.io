import React, { useEffect, useState } from "react";
import { getAllProducts } from "../api/productsApi";
import Product from "./Product";
import styled from "styled-components";
import Loading from "./Loading";

const Header = styled.h1`
margin-top: 0;
`;

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const result = await getAllProducts();

      setLoading(false);
      setData(result);
    }
    fetchData();
  }, []);

  if (loading) return (
    <Loading />
  );

  return (
    <div>
      <Header>Products</Header>
      {data.map(item => (
        <Product key={item.id} product={item}/>
      ))}
    </div>
  );
}

export default Products;