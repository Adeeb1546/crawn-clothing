import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import CartReducer from "./cart/cartReducer";
import DirectoryReducer from "./directory/directoryReducer";
import ShopReducer from "./shop/shopReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  cartlist: ["cart"]
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: CartReducer,
  directory: DirectoryReducer,
  shop: ShopReducer
});

export default persistReducer(persistConfig, rootReducer);
