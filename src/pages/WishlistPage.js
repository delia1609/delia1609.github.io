import { Card, Text, Title, useMantineTheme } from "@mantine/core";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Cards from "../components/Cards";
import { useWishlistContext } from "../context/WishlistContext";
import CategoriesPage from "./CategoriesPage";

const StyledDiv = styled.div`
  margin-bottom: 100px;
`

export default function WishlistPage() {
  const { wishlist } = useWishlistContext();
  const theme = useMantineTheme();

  let allItems = [];
  
  wishlist.forEach(element => {
    allItems.push(element.item);
  });

  if (!allItems.length > 0) {
    return (
      <>
        <StyledDiv>You don't have any products in the wishlist. To add products to wishlist please <Text variant="link" component={Link} to="/">go back to the store.</Text></StyledDiv>
        <CategoriesPage/>
      </>
    )
  }

  return (
    <>
    <Title color={theme.colors.gray[7]} mb="xl">Wishlist</Title>
    <Cards products={allItems}/>
    </>
   
  )
}