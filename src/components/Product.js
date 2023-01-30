import styled from "styled-components";
import { StyledBtn } from "./_styled";
import { useCurrentProduct } from "../context/CurrentProductContext";
import { useCartContext } from "../context/CartContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  width: 180px;
  height: 240px;
  background-color: #fff;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  cursor: pointer;
  transition: box-shadow .2s;

  &:hover {
    box-shadow: 0px 0px 3px 4px rgba(0, 0, 0, 0.2);
  }
`;

const Img = styled.img`
  max-width: 110px;
  max-height: 160px;
  object-fit: contain;
`;

const Actions = styled.div`
  display: flex;
  gap: 6px;
`

const Title = styled.div`
  font-size: 1em;
  font-weight: bold;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Price = styled.div`
font-size: 0.8em;
`;

export default function Product({ product }) {
  const { setProduct } = useCurrentProduct();
  const { cart, addToCart, isInCart, removeOneFromCart } = useCartContext();

  const productInCart = isInCart(product);

  const handleProductClick = () => {
    setProduct(product);
  }

  const handleAddToCart = (e) => {
    addToCart(product);
    console.log(cart);
    e.stopPropagation();
  }

  const handleRemoveFromCart = (e) => {
    removeOneFromCart(product);
    e.stopPropagation();
  }

  return (
    <Container onClick={handleProductClick}>
      <Title>{product.title}</Title>
      <Img src={product.image} alt={product.title} />
      <Price>${product.price}</Price>
      <Actions>
        <StyledBtn primary onClick={handleAddToCart}>Add to Cart</StyledBtn>
        <StyledBtn disabled={!productInCart} onClick={handleRemoveFromCart}>Remove</StyledBtn>
      </Actions>
    </Container>
  )
}