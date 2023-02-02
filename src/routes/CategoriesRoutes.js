import { Route } from "react-router-dom";
import CategoriesLayout from "../layouts/CategoriesLayout";
import CategoriesPage from "../pages/CategoriesPage";
import CategoryPage from "../pages/CategoryPage";

export const CategoriesRoutes = (
      <Route path="categories" element={<CategoriesLayout />} >
        <Route index element={<CategoriesPage />} />
        <Route path=":categoryId" element={<CategoryPage />} />
      </Route>
  );