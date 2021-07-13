export const getAllProducts = (state) => state.productsReducer.data;

export const getSelectedProduct = (state) => state.productsReducer.dataselected;

export const getCartState = (state) => state.productsReducer.cart;

export const getCartTotal = (state) => state.productsReducer.total;

export const getAllFasionBrands = (state) =>
  state.productsReducer.products
    .map((product) => product.brand)
    .reduce(
      (unique, brand) => (unique.includes(brand) ? unique : [...unique, brand]),
      []
    )
    .sort((a, b) => {
      const textA = a.toUpperCase();
      const textB = b.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });

export const getFilteredProducts = (state) => {
  const {
    productsReducer: { products },
    filters,
  } = state;
  return products
    .filter((product) => {
      const searchText = (
        product.brand.toLowerCase() +
        " " +
        product.name.toLowerCase()
      ).includes(filters.name.toLowerCase().trim());

      if (filters.brand.length > 0 && filters.name.length === 0) {
        return filters.brand.includes(product.brand);
      } else if (filters.name.length !== 0 && filters.brand.length === 0) {
        return searchText;
      } else if (filters.name.length > 0 && filters.name.length > 0) {
        return filters.brand.includes(product.brand) && searchText;
      } else {
        return product;
      }
    })
    .sort((a, b) => {
      const textA = a.brand.toUpperCase();
      const textB = b.brand.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
};
