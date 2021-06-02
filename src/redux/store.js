import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import mobileReducer from "./reducers/mobileReducer";
import laptopReducer from "./reducers/laptopReducer";
import fetchUsersReducer from "./reducers/usersReducer";

const rootReducer = combineReducers({
  mobiles: mobileReducer,
  laptops: laptopReducer,
  users: fetchUsersReducer,
});
const appStore = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default appStore;
