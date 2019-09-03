import ShopActionsTypes from "./shop.Types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errormessage: undefined
};

const ShopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionsTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case ShopActionsTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errormessage: action.payload
      };

    default:
      return state;
  }
};
export default ShopReducer;
