import styled from "styled-components";
import { useState, useEffect } from "react";
import { getAllCategories } from "../api/productsApi";
import { Link, Outlet } from "react-router-dom";
import { Text } from "@mantine/core";

const Nav = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  min-height: 30px;
`

const Container = styled.div`
  margin-top: 10px;
`

export default function CategoriesLayout() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await getAllCategories();
      setLoading(false);

      setCategories(result);
    })();
  }, []);

  return (
    <div>
      <Nav>
        {loading ? '...' : categories.map((category, index) => (
          <Text variant='link' component={Link} key={index} to={category} end tt="capitalize">{category}</Text>
        ))}
      </Nav>

      <Container>
        <Outlet />
      </Container>
    </div>
  );
}