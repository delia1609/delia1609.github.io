import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 200px;
  background-color: #fff;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  cursor: pointer;
  transition: box-shadow .2s;

  &:hover {
    box-shadow: 0px 0px 3px 4px rgba(0, 0, 0, 0.2);
  }
`

const Img = styled.img`
  max-width: 110px;
  max-height: 160px;
  object-fit: contain;
`

export default function Product({ product, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick(product);
    }
  }

  return (
    <Container onClick={handleClick}>
      <Img src={product.image} alt={product.title} />
    </Container>
  )
}