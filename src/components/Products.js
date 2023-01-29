import { useContext } from "react";
import styled from "styled-components";
import Product from "./Product";
import Loading from "./Loading";
import { Header } from "./_styled";
import CurrentProductContext from "../context/CurrentProductContext";

const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export default function Products( {products, loading} ) {
  const { setProduct } = useContext(CurrentProductContext);

  const handleProductClick = (product) => {
    setProduct(product);
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <Header>Products</Header>
      <ProductsList>
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            onClick={handleProductClick} />
        ))}
      </ProductsList>
    </div>
  )
}