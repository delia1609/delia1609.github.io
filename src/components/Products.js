import React, { useEffect, useState } from "react";
import { getAllProducts } from "../api/productsApi";
import Product from "./Product";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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
    <div>Loading...</div>
  );

  return (
    <div>
      {data.map(item => (
        <Product key={item.id} product={item}/>
      ))}
    </div>
  );
}

export default Products;