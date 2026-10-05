export const catalogLink = (group, category) => {
  const params = new URLSearchParams();
  if (group) params.set("group", group);
  if (category) params.set("category", category);
  const query = params.toString();
  return query ? `/catalog?${query}` : "/catalog";
};

export const getFinalPrice = (product) =>
  product.onSale && product.discount
    ? Math.round(product.price * (1 - product.discount / 100))
    : product.price;
