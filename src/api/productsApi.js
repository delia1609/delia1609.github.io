const API_ROOT = 'https://fakestoreapi.com';

export const getAllProducts = async () => {
  const result = await fetch(`${API_ROOT}/products`);
  const json = await result.json();

  return json;
}

export const getProductById = async (id) => {
  const result = await fetch(`${API_ROOT}/products/${id}`);
  const json = await result.json();

  return json;
}