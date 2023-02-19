import { Grid, useMantineTheme } from "@mantine/core";
import SimpleCard from "./Card";
import Loading from "./Loading";

export default function Cards({ products, loading, hideCategory }) {
  const theme = useMantineTheme();

  if (loading) {
    return <Loading />
  }

  return (
    <Grid justify="space-around">
      {products.map(product => (
        <Grid.Col
          style={{ maxWidth: 350, cursor: "pointer" }}
          sm={3}
          xs={3}
          key={product.id}>
          <SimpleCard 
            product={product}
            hideCategory={hideCategory} 
            style= {{height: "90%"}}
            />
        </Grid.Col>
      ))}
    </Grid>
  )
}