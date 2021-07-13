export const getAllEmployees = (state) => state.employeesReducer.data;

export const getSelectedEmployee = (state) => state.employeesReducer.dataselected;

export const getCartState = (state) => state.employeesReducer.cart;

export const getCartTotal = (state) => state.employeesReducer.total;

export const getAllFasionBrands = (state) =>
  state.employeesReducer.employees
    .map((employee) => employee.brand)
    .reduce(
      (unique, brand) => (unique.includes(brand) ? unique : [...unique, brand]),
      []
    )
    .sort((a, b) => {
      const textA = a.toUpperCase();
      const textB = b.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });

export const getFilteredEmployees = (state) => {
  const {
    employeesReducer: { employees },
    filters,
  } = state;
  return employees
    .filter((employee) => {
      const searchText = (
        employee.brand.toLowerCase() +
        " " +
        employee.name.toLowerCase()
      ).includes(filters.name.toLowerCase().trim());

      if (filters.brand.length > 0 && filters.name.length === 0) {
        return filters.brand.includes(employee.brand);
      } else if (filters.name.length !== 0 && filters.brand.length === 0) {
        return searchText;
      } else if (filters.name.length > 0 && filters.name.length > 0) {
        return filters.brand.includes(employee.brand) && searchText;
      } else {
        return employee;
      }
    })
    .sort((a, b) => {
      const textA = a.brand.toUpperCase();
      const textB = b.brand.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
};
