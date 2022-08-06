import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import mainReducer from "./reducers";

const store = createStore(
  combineReducers({
    globalData: mainReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
