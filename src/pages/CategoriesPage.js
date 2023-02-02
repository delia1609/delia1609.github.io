import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getAllCategories } from "../api/productsApi";
import Loading from "../components/Loading";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true); 
      const result = await getAllCategories();
      setLoading(false);

      setCategories(result);
    })();
  } ,[]);

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <h1>Categories</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}