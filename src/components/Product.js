import styled from "styled-components";
import { StyledBtn } from "./_styled";
import { useCartContext } from "../context/CartContext";
import CartProductStatus from "./CartProductStatus";
import { Link } from "react-router-dom";

const GetCategoryColor = (category) => {
  switch(category) {
    case 'electronics':
      return '#444';
    case 'jewelery':
      return '#CE6E30';
    case "men's clothing":
      return '#4660AF';
    case "women's clothing":
      return '#AF467D';
    default:
      return '#000';
  }
}

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: black;
  padding: 10px 14px;
  width: 220px;
  height: 300px;
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

const ImgWrapper = styled.div`
  min-height: 160px;
  display: flex;
  align-items: center;
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


const Category = styled.div`
  font-size: 0.9em;
  background: ${props => GetCategoryColor(props.category)};
  color: white;
  padding: 2px 4px;
  border-radius: 4px;
`;

const Price = styled.div`
  font-size: 0.8em;
`;

const CountLbl = styled.div`
  font-size: 0.9em;
`;

export default function Product({ product, hideCategory }) {
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
        
        <ImgWrapper>
          <Img src={product.image} alt={product.title} />
        </ImgWrapper>

        {!hideCategory && <Category category={product.category}>{product.category}</Category>}
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