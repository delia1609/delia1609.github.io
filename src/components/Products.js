import React, { useEffect, useState } from "react";
import { getAllProducts } from "../api/productsApi";
import Product from "./Product";
import Loading from "./Loading";
import { Box, Typography, Grid } from "@mui/material";
import useStyles from "./_styles";

const Products = ({ onClick }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const result = await getAllProducts();

      setLoading(false);
      setData(result);
    }
    fetchData();
  }, []);

  if (loading) return (
    <Loading />
  );

  const handleProductClick = (product) => {
    if (onClick) {
      onClick(product);
    }
  };

  return (
    <Box>
      <Box className={classes.header}>
        <Typography className={classes.header} variant="h2" textAlign={"center"}>Products</Typography>
      </Box>
    
      <Grid container spacing={5} rowSpacing={6} alignItems="center" sx={{margin: 0}}>
        {data.map(item => (
          <Grid item xs={6} sm={4} md={3} xl={2} key={item.id} style={{maxWidth: "200px"}}>
            <Product
              product={item}
              onClick={handleProductClick} />
          </Grid> 
        ))}
        </Grid>
    </Box>
  );
}

export default Products;