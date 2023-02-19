import styled from "styled-components"
import { Link } from "react-router-dom";

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: black;
  padding: 10px 14px;
  background-color: #fff;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  cursor: pointer;
  transition: box-shadow .2s;

  &:hover {
    box-shadow: 0px 0px 3px 4px rgba(0, 0, 0, 0.2);
  }
`

const StyledLink = styled(Link)`
  color: none;
  text-decoration: none;
`

const Img = styled.img`
  max-height: 60px;
  max-width: 60px;
  object-fit: contain;
`;

const ImgWrapper = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  font-weight: bold;
`

const Price = styled.div`
  font-size: 0.9em;
  color: #555;
`

const Quantity = styled.div`
  font-size: 1.1em;
  white-space: nowrap;
`

const Space = styled.div`
  flex: 1;  
`

export default function CartItem({ item }) {
  const { count, item: product } = item;

  return (
    <StyledLink to={`/product/${product.id}`}>
      <Item>
        <ImgWrapper>
          <Img src={product.image} alt={product.title} />
        </ImgWrapper>
        <Title>
          {product.title}
        </Title>
        <Space />
        <Price>${product.price}</Price>
        <Quantity>x {count}</Quantity>
      </Item>
    </StyledLink>
  );
}