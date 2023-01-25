import React from "react";
import { Constainer, Image } from "./Container";
import Flex from "./Flex";

const Product = ({ product, onClick }) => {

  const handleClick = () => {
    if (onClick) {
      onClick(product);
    }
  }

  return (
    <Flex column style={{ width: '120px' }}>
      {/* {product.title} */}
      <Constainer onClick={handleClick}>
        <Image src={product.image} alt={product.title} /> 
      </Constainer>
    </Flex>
  );
}

export default Product;