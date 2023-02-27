import { Badge, Button, Card, Group, Image, MediaQuery, Text, Title, useMantineColorScheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconGhost2 } from "@tabler/icons";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
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
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();


  const smallScreen = useMediaQuery('(max-width: 768px)');

  const dark = colorScheme === 'dark';
  const border = dark ? "10px solid #25262b" : "none";

  const productInCart = isInCart(product);

  const categoryColor = GetCategoryColor(product.category);

  const ImageStyle = {
    maxHeight: smallScreen ? "50vh" : "220px",
    padding: smallScreen ? "10px" : "none"
  };

  const CartStyle = {
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "white", 
    border: { border },
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

  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
      <Card shadow="sm" p="lg" radius="md" withBorder>
          <Card.Section 
            style={CartStyle}
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

        <Group position="apart" spacing="sm" mt="md" noWrap>
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