import uuid from "uuid/v4";

const employeesDefaultState = {
  data: [
   
  ],
  cart: [],
  total: 0,
};

const employeesReducer = (state = employeesDefaultState, action) => {
  switch (action.type) {
    case "SET_EMPLOYEES":
      return {
        ...state,
        data: action.data,
      };
    case "SET_SELECTED_EMPLOYEE":
      return {
        ...state,
        dataselected: action.data,
      };
    case "ADD_NEW_PHONE":
      return {
        ...state,
        employee: [...state.employee, action.toy],
      };
    case "ADD_TO_CART":
      const addedFasion = state.employee.find((toy) => action.id === toy.id);
      const existingFasion = state.cart.find(
        (existingFasion) => action.id === existingFasion.id
      );

      if (existingFasion) {
        addedFasion.quantity += 1;
        return {
          ...state,
          total: state.total + addedFasion.price,
        };
      } else {
        addedFasion.quantity = 1;
        const newTotal = state.total + addedFasion.price;
        return {
          ...state,
          cart: [...state.cart, addedFasion],
          total: newTotal,
        };
      }
    case "REMOVE_FROM_CART":
      const toyToRemove = state.cart.find((toy) => action.id === toy.id);
      const removeFasion = state.cart.filter((toy) => action.id !== toy.id);

      const newTotal = state.total - toyToRemove.price * toyToRemove.quantity;
      return {
        ...state,
        cart: removeFasion,
        total: newTotal,
      };
    case "DECREMENT":
      const toy = state.cart.find((toy) => action.id === toy.id);

      if (toy.quantity > 1) {
        toy.quantity -= 1;
        const newTotal = state.total - toy.price;
        return {
          ...state,
          total: newTotal,
        };
      } else {
        return state;
      }
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        total: 0,
      };
    default:
      return state;
  }
};

export default employeesReducer;
