import { Badge, Button, Card, Group, Image, MediaQuery, Text, Title, useMantineColorScheme } from "@mantine/core";
import { useHover, useMediaQuery } from "@mantine/hooks";
import { IconGhost2 } from "@tabler/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useWishlistContext } from "../context/WishlistContext";
import CartProductStatus from "./CartProductStatus";

const GetCategoryColor = (category) => {
  switch (category) {
    case 'electronics':
      return 'cyan';
    case 'jewelery':
      return 'violet';
    case "men's clothing":
      return 'indigo';
    case "women's clothing":
      return 'pink';
    default:
      return 'dark';
  }
}

export default function SimpleCard({ product, hideCategory }) {
  const { cart, addToCart, isInCart, removeOneFromCart } = useCartContext();
  const { wishlist, addToWishlist, isInWishlist, removeOneFromWishlist } = useWishlistContext();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { hovered, ref } = useHover();

  const smallScreen = useMediaQuery('(max-width: 768px)');
  const cartButtonsScreen = useMediaQuery('(max-width: 1246px)');

  

  const dark = colorScheme === 'dark';
  const cardInnerShadow = dark ? "inset 10px 10px 10px 10px #25262b" : "none";

  const productInCart = isInCart(product);
  const productInWishlist = isInWishlist(product);
  const categoryColor = GetCategoryColor(product.category);
  const groupPosition = cartButtonsScreen ? "center" : "apart";
  const cardShadow = dark ? (hovered ? "rgba(254, 222, 255, 0.35) 0px 2px 7px" : "sm") : (hovered ? "rgba(54, 22, 119, 0.35) 0px 4px 10px" : "sm");
  
  const [wishlistText, setWishlistText] = useState(productInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist');

  const ImageStyle = {
    maxHeight: smallScreen ? "50vh" : "220px",
    padding: smallScreen ? "10px" : "none"
  };

  const CartStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    boxShadow: {cardInnerShadow},
    minHeight: smallScreen ? "50vh" : "220px"
  };



  const handleAddToCart = (e) => {
    addToCart(product);
    console.log(cart);
    e.preventDefault();
  }

  const handleRemoveFromCart = (e) => {
    removeOneFromCart(product);
    e.preventDefault();
  }

  const handleWishlist = (e) => {
    if(productInWishlist) {
      removeOneFromWishlist(product);
      setWishlistText("Add to Wishlist");
    }

    else {
      addToWishlist(product);
      setWishlistText("Remove from Wishlist");
    }  
    e.preventDefault();
  }

  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
      <Card shadow={cardShadow} p="lg" radius="md" withBorder ref={ref}>
        <Card.Section
          style={CartStyle}
          shadow={cardShadow}
        >
          <Image
            src={product.image}
            alt={product.title}
            fit="contain"
            height={smallScreen ? "40vh" : "160px"}
            width={"100%"}
            style={ImageStyle}
          />
        </Card.Section>

        <div style={{ width: 200 }}>
          <Text truncate weight={500}>{product.title}</Text>
        </div>

        <Group position="apart" mt="md" mb="xs">
          <Text size="sm">${product.price}</Text>

          {!hideCategory && <Badge color={categoryColor} variant="light">
            {product.category}
          </Badge>}
        </Group>

        <Text lineClamp={2} size="sm" color="dimmed">
          {product.description}
        </Text>

        <Group position={groupPosition} spacing="sm" mt="md" noWrap>
          <Button onClick={handleAddToCart} variant="light" color="blue" radius="md">
            Add to Cart
          </Button>

          <Text size="xs">
            <CartProductStatus product={product}></CartProductStatus>
          </Text>

          <Button variant="error"
            disabled={!productInCart}
            onClick={handleRemoveFromCart}>Remove</Button>
        </Group>
        
        <Button onClick={handleWishlist} leftIcon={<IconGhost2 />} variant="gradient" fullWidth mt="md" radius="md" gradient={ wishlistText==="Remove from Wishlist" ? {from: 'red', to: 'orange', deg: 60 } : { from: 'teal', to: 'blue', deg: 60 }}>
          {wishlistText}
        </Button>
      </Card>
    </Link>
  );
}