import { combineReducers } from "redux";
import UserReducer from "./user_reducer";
import CartReducer from './cart_reducer';

export default combineReducers({
  user: UserReducer,
  cart:CartReducer
});
