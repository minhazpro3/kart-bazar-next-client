import { createStore } from "redux";
import productReducer from "./reducers/product_reducer";

const store = createStore(productReducer);

export default store;
