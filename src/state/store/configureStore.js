import { createStore, combineReducers } from "redux";
import productsReducer from "../reducers/productsReducer";
import employeesReducer from "../reducers/employeesReducer";
import gendersReducer from "../reducers/gendersReducer";
import filtersReducer from "../reducers/filtersReducer";
import categoriesReducer from "../reducers/categoriesReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      productsReducer,
      categoriesReducer,
      employeesReducer,
      gendersReducer,
      filters: filtersReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

export default configureStore;
