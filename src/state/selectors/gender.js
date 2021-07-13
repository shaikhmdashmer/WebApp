export const getAllGenders = (state) => state.gendersReducer.data;

export const getSelectedGender = (state) => state.gendersReducer.dataselected;

export const getCartState = (state) => state.gendersReducer.cart;

export const getCartTotal = (state) => state.gendersReducer.total;

export const getAllFasionBrands = (state) =>
  state.gendersReducer.genders
    .map((gender) => gender.brand)
    .reduce(
      (unique, brand) => (unique.includes(brand) ? unique : [...unique, brand]),
      []
    )
    .sort((a, b) => {
      const textA = a.toUpperCase();
      const textB = b.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });

export const getFilteredGenders = (state) => {
  const {
    gendersReducer: { genders },
    filters,
  } = state;
  return genders
    .filter((gender) => {
      const searchText = (
        gender.brand.toLowerCase() +
        " " +
        gender.name.toLowerCase()
      ).includes(filters.name.toLowerCase().trim());

      if (filters.brand.length > 0 && filters.name.length === 0) {
        return filters.brand.includes(gender.brand);
      } else if (filters.name.length !== 0 && filters.brand.length === 0) {
        return searchText;
      } else if (filters.name.length > 0 && filters.name.length > 0) {
        return filters.brand.includes(gender.brand) && searchText;
      } else {
        return gender;
      }
    })
    .sort((a, b) => {
      const textA = a.brand.toUpperCase();
      const textB = b.brand.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
};
