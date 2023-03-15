import { useEffect, useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Text,
  Burger,
  useMantineTheme,
  Flex,
  ActionIcon,
} from '@mantine/core';
import LightAndDarkModeButton from './LightDarkButton';
import { Link, Route, Routes } from 'react-router-dom';
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";
import { CategoriesRoutes } from "../routes/CategoriesRoutes";
import NotFoundPage from "../pages/NotFoundPage";
import styled from "styled-components";
import { IconHeart, IconHome2, IconShoppingCart } from '@tabler/icons';
import { useCartContext } from '../context/CartContext';
import { useWishlistContext } from '../context/WishlistContext';
import WishlistPage from '../pages/WishlistPage';

const StyledText = styled(Text)`
text-align: center;
`
export default function AppShellMain() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [displayNav, setDisplayNav] = useState('none');
  const [navWidth, setNavWidth] = useState({ sm: 0, lg: 0 });

  const { getCount } = useCartContext();
  const { getItemsCount } = useWishlistContext();

  const onMenuClick = () => {
    setOpened((o) => !o);
    setDisplayNav(displayNav === 'flex' ? 'none' : 'flex');
  }

  const onLinkClick = () => {
    setOpened(false);
    setDisplayNav('none');
  }

  useEffect(() => {
    if (displayNav === 'flex') {
      setNavWidth({ sm: 200, lg: 300 });
    }

    else {
      setNavWidth({ sm: 0, lg: 0 });
    }
  }, [displayNav])

  return (

    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          maxWidth: "100%"
        },
      }}
      navbar={
        <Navbar p="md" width={navWidth} display={displayNav} style={{ alignItems: "center" }}>
          <Navbar.Section>
            <Text tt="capitalize">Menu</Text>
          </Navbar.Section>

          <Navbar.Section grow mt="lg">
            <Flex direction="column">
              <StyledText variant='link' component={Link} to="/" onClick={onLinkClick}>Home Page</StyledText>
              <StyledText variant='link' component={Link} to="/categories" onClick={onLinkClick}>Categories</StyledText>
              <StyledText variant='link' component={Link} to="/cart" onClick={onLinkClick}>View Cart</StyledText>
            </Flex>
          </Navbar.Section>

          <Navbar.Section>
            <Text tt="capitalize">this is the footer</Text>
          </Navbar.Section>

        </Navbar>
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: "center" }}>
            <Flex justify={"space-between"} style={{ width: '96%' }}>
              <Flex>
                <Burger opened={opened} onClick={onMenuClick} color={theme.colors.gray[6]} size="sm" mr="md" />
                <ActionIcon component={Link} to="/" onClick={onLinkClick}>
                  <IconHome2 color={theme.colors.gray[6]} />
                </ActionIcon>
              </Flex>

              <Flex style={{ alignItems: "center" }}>
                <Flex style={{ cursor: "pointer", textDecoration: "none" }} component={Link} to="/wishlist">
                  <ActionIcon>
                    <IconHeart color={theme.colors.gray[6]} size="xl" />
                  </ActionIcon>
                  <Text color={theme.colors.gray[6]} mr="md" size="lg">({getItemsCount()})</Text>
                </Flex>

                <Flex style={{ cursor: "pointer", textDecoration: "none" }} component={Link} to="/cart">
                  <ActionIcon>
                    <IconShoppingCart color={theme.colors.gray[6]} size="xl" />
                  </ActionIcon>
                  <Text color={theme.colors.gray[6]} mr="md" size="lg">({getCount()})</Text>
                </Flex>

                <LightAndDarkModeButton />
              </Flex>
            </Flex>
          </div>
        </Header>
      }
    >

      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<ProductsPage />} />
        <Route path="/product/:productId" element={<ProductDetailsPage />} />
        <Route path="/cart" element={< CartPage />} />
        <Route path="wishlist" element={< WishlistPage/>} />

        {CategoriesRoutes}
        {/* </Route> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppShell>
  );
}