import axios from 'axios';

const API_ROOT = 'https://fakestoreapi.com';

export const getAllProducts = async () => {
  const result = await axios.get(`${API_ROOT}/products`);
  return result.data;
  // const result = await fetch(`${API_ROOT}/products`);
  // const json = await result.json();

  // return json;
}

export const getProductById = async (id) => {
  const result = await axios.get(`${API_ROOT}/products/${id}`);
  return result.data;
}

export const getAllCategories = async () => {
  const result = await axios.get(`${API_ROOT}/products/categories`);
  return result.data;
}

export const getProductsInCategory = async (category) => {
  const result = await axios.get(`${API_ROOT}/products/category/${category}`);
  return result.data;
}