import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
const loggermiddleware = [logger];
const middlewares = [thunk];
export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares, ...loggermiddleware)
);
export const persistor = persistStore(store);
export default { store, persistor };
