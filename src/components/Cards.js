import { Grid, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import SimpleCard from "./Card";
import Loading from "./Loading";

export default function Cards({ products, loading, hideCategory }) {
  const theme = useMantineTheme();
  const smallScreen = useMediaQuery('(max-width: 768px)');

  const StyledCard = {
    height: smallScreen ? "85%" : "auto"
  }

  if (loading) {
    return <Loading />
  }

  return (
    <Grid justify="space-around">
      {products.map(product => (
        <Grid.Col
          style={{ minWidth: 268.5, maxWidth: 350, cursor: "pointer" }}
          sm={3}
          xs={3}
          key={product.id}>
          <SimpleCard 
            product={product}
            hideCategory={hideCategory} 
            style= {StyledCard}
            />
        </Grid.Col>
      ))}
    </Grid>
  )
}