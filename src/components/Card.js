import { Badge, Button, Card, Group, Image, Text, Title, useMantineColorScheme } from "@mantine/core";
import { IconGhost2 } from "@tabler/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/CartContext";
import CartProductStatus from "./CartProductStatus";

export default function SimpleCard({ product, hideCategory }) {
  const { cart, addToCart, isInCart, removeOneFromCart } = useCartContext();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const dark = colorScheme === 'dark';
  const border = dark ? "10px solid #25262b" : "none";

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
    <Link to={`/product/${product.id}`} style={{textDecoration: "none"}}>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section style={{ minHeight: "50vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white", border: { border } }}>
          <Image
            src={product.image}
            alt={product.title}
            height="40vh"
            fit="contain"
            style={{ width: "auto", maxHeight: "50vh"}}
          />
        </Card.Section>

        <div style={{ width: 200 }}>
          <Text truncate weight={500}>{product.title}</Text>
        </div>

        <Group position="apart" mt="md" mb="xs">
          <Text size="sm">${product.price}</Text>

          {!hideCategory && <Badge color="pink" variant="light">
            {product.category}
          </Badge>}
        </Group>

        <Text lineClamp={2} size="sm" color="dimmed">
          {product.description}
        </Text>

        <Group position="apart" spacing="sm" mt="md">
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

        <Button leftIcon={<IconGhost2 />} variant="gradient" fullWidth mt="md" radius="md" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
          Add to Wishlist
        </Button>
      </Card>
    </Link>
  );
}