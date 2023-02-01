import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { getProductById } from "../api/productsApi";
import { Button, Header } from "./_styled";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const Root = styled.div`
  margin: auto;
`

const Description = styled.p`
  font-size: 1em;
`

export default function ProductDetails() {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);

  const { productId } = useParams();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      const data = await getProductById(productId);

      setLoading(false);
      setProduct(data);
    }

    getData();
  }, [productId]);

  if (!product) {
    return (
      <div>Product not found!</div>
    );
  }

  if (loading) {
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