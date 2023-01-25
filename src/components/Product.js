import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import useStyles from "./_styles";

const Product = ({ product, onClick }) => {
  const classes = useStyles();

  const handleClick = () => {
    if (onClick) {
      onClick(product);
    }
  }

  return (
      <Card className={classes.container} onClick={handleClick}>
        <CardActionArea>
          <CardMedia 
            sx={{ minHeight: 100,  width: 160}}
            component="img"
            className={classes.image}
            image={product.image}
          />
          <CardContent sx={{display: "inline-block", alignSelf: "flex-end"}}>
            <Typography variant="body3">
              {product.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}

export default Product;