import ShopActionsTypes from "./shop.Types";

export const updatecollections = collectionsMap => ({
  type: ShopActionsTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
});
