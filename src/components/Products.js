import styled from "styled-components";
import Product from "./Product";
import Loading from "./Loading";

const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export default function Products({ products, loading, hideCategory }) {
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
            hideCategory={hideCategory}
          />
        ))}
      </ProductsList>
    </div>
  )
}