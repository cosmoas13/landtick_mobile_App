import { createStore, combineReducers, applyMiddleware } from "redux";

import login from "../_reducers/auth";

import orders from "../_reducers/orders";
import approve from "../_reducers/approve";
import getdetailorders from "../_reducers/getdetailorders";
import myticket from "../_reducers/myticket";
import allticket from "../_reducers/allticket";
import search from "../_reducers/search";
import attach from "../_reducers/attach";
import add from "../_reducers/add";
import buy from "../_reducers/buy";
import deleteorder from "../_reducers/deleteorder";

import { logger, promise } from "../middleware";

// Global state
const rootReducers = combineReducers({
  login,
  orders,
  getdetailorders,
  approve,
  myticket,
  allticket,
  search,
  attach,
  add,
  buy,
  deleteorder
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
