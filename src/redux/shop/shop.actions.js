import ShopActionsTypes from "./shop.Types";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = collectionsMap => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionFailure = errormessage => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errormessage
});

export const FetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());
    collectionRef
      .get()
      .then(snapshot => {
        const collectionMap = convertCollectionsSnapshotToMap(snapshot);

        dispatch(fetchCollectionSuccess(collectionMap));
      })
      .catch(error => dispatch(fetchCollectionFailure(error.message)));
  };
};
