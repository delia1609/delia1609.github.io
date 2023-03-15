import { ColorSchemeProvider, MantineProvider, Paper } from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { useEffect } from "react";
import styled from "styled-components";
import AppShellMain from "./components/AppShell";
import { CartContextProvider } from "./context/CartContext";
import { WishlistContextProvider } from "./context/WishlistContext";
import AppRoutes from "./routes/AppRoutes";

function App() {

  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  useEffect(() => {
    document.title = "Delirium Shop"
  }, [])

  return (

    // <StyledApp>
    <WishlistContextProvider>
      <CartContextProvider>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider theme={{ colorScheme }} withNormalizeCSS withGlobalStyles>
            <Paper p="md" radius={0} style={{ minHeight: "100vh" }}>
              <AppShellMain />
            </Paper>
          </MantineProvider>
        </ColorSchemeProvider>

        {/* <AppRoutes /> */}
      </CartContextProvider>
    </WishlistContextProvider>

    // </StyledApp>
  );
}

export default App;
