import styled from "styled-components";
import { useCurrentProduct } from "../context/CurrentProductContext";
import { Button, Header } from "./_styled";

const Root = styled.div`
  margin: auto;
`

const Description = styled.p`
  font-size: 1em;
`

export default function ProductDetails({ product }) {
  const { title, description } = product;

  const { setProduct } = useCurrentProduct();

  const handleBackClick = () => {
    setProduct(null);
  }

  return (
    <Root>
      <Button onClick={handleBackClick}>{'<'}</Button>
      <Header>{title}</Header>

      <Description>{description}</Description>
    </Root>
  )
}