import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryPage from "./pages/CategoryPage";
import CategoriesLayout from "./layouts/CategoriesLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductsPage />} />
        <Route path="product/:productId" element={<ProductDetailsPage />} />
        <Route path="cart" element={< CartPage />} />
        <Route path="categories" element={<CategoriesLayout />} >
          {/* <Route index element={<CategoriesPage />} /> */}
          <Route path=":categoryId" element={<CategoryPage />}/>
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}