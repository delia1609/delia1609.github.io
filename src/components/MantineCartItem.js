import { Badge, Button, Card, Flex, Group, Image, Text, Title, useMantineTheme } from "@mantine/core";
import styled from "styled-components";

const Space = styled.div`
  flex: 1;  
`

export default function MantineCartItem({ item }) {
  const { count, item: product } = item;
  const theme = useMantineTheme();

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Flex style={{ alignItems: "center" }}>
        <Flex gap={10} style={{ alignItems: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", width: "60px", objectFit: "contain", backgroundColor: "white"}}>
            <Image
              src={product.image} alt={product.title} height={60} width="auto"
            />
          </div>
          <Title order={4} color={theme.colors.gray[7]}>{product.title}</Title>
        </Flex>

        <Space />

        <Text size="sm" color={theme.colors.gray[6]} mr="md">${product.price}</Text>
        <Text>x {count}</Text>
      </Flex>
    </Card>
  );
}