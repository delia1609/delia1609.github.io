import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";
import NotFoundPage from "../pages/NotFoundPage";
import { CategoriesRoutes } from "./CategoriesRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductsPage />} />
        <Route path="product/:productId" element={<ProductDetailsPage />} />
        <Route path="cart" element={< CartPage />} />
        
        {CategoriesRoutes}
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}