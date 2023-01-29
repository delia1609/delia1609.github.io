import { useContext } from "react";
import styled from "styled-components";
import CurrentProductContext from "../context/CurrentProductContext";
import { Button, Header } from "./_styled";

const Root = styled.div`
  margin: auto;
`

const Description = styled.p`
  font-size: 1em;
`

export default function ProductDetails({ product }) {
  const { title, description } = product;

  const { setProduct } = useContext(CurrentProductContext);

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