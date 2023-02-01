import styled from "styled-components";
import { StyledBtn } from "./_styled";
import { useCartContext } from "../context/CartContext";
import CartProductStatus from "./CartProductStatus";
import { Link, useParams } from "react-router-dom";

const StyledLink = styled(Link)`
  
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: black;
  padding: 10px 14px;
  width: 220px;
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
  width: 100%;
  gap: 6px;
  align-items: center;
  justify-content: space-between;
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

const CountLbl = styled.div`
  font-size: 0.9em;
`;

export default function Product({ product }) {
  const { cart, addToCart, isInCart, removeOneFromCart } = useCartContext();

  const productInCart = isInCart(product);

  const handleAddToCart = (e) => {
    addToCart(product);
    console.log(cart);
    e.preventDefault();
  }

  const handleRemoveFromCart = (e) => {
    removeOneFromCart(product);
    e.preventDefault();
  }

  return (
    // <Link to={`/${product}/:${productId}`}> 
      <Container to={`/product/${product.id}`}>
        <Title>{product.title}</Title>
        <Img src={product.image} alt={product.title} />
        <Price>${product.price}</Price>

        <Actions>
          <StyledBtn onClick={handleAddToCart}>Add to Cart</StyledBtn>

          <CountLbl>
            <CartProductStatus product={product}></CartProductStatus>
          </CountLbl>

          <StyledBtn 
            variant="error"
            disabled={!productInCart} 
            onClick={handleRemoveFromCart}>
            Remove
          </StyledBtn>
        </Actions>
      </Container>
    // </Link>
  )
}