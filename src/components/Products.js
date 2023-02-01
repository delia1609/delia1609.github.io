import styled from "styled-components";
import Product from "./Product";
import Loading from "./Loading";
import { useState, useEffect } from "react";
import { getAllProducts } from "../api/productsApi";

const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export default function Products() {
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
    <div>
      <ProductsList>
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
          />
        ))}
      </ProductsList>
    </div>
  )
}