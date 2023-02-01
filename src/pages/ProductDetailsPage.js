import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { getProductById } from "../api/productsApi";
import { Button, Header } from "../components/_styled";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const Root = styled.div`
  margin: auto;
`

const Description = styled.p`
  font-size: 1em;
`

export default function ProductDetailsPage() {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { productId } = useParams();

  useEffect(() => (async () => {
    setLoading(true);

    const data = await getProductById(productId);

    setLoading(false);

    if (!data) {
      setError(true);
    }

    else {
      setProduct(data);
    }

  })()
    , [productId]);

  if (error) {
    return (
      <div>Product not found!</div>
    );
  }

  if (!product || loading) {
    return (
      <Loading />
    );
  }
  const { title, description } = product;

  return (
    <Root>
      <Link to="/"><Button >{'<'}</Button></Link>
      <Header>{title}</Header>

      <Description>{description}</Description>
    </Root>
  )
}