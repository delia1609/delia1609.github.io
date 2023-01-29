export const getAllProducts = async () => {
  const result = await fetch('https://fakestoreapi.com/products');
  const json = await result.json();

  return json;
}