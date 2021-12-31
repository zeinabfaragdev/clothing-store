import ShopActionTypes from "./shop-types";
import {
  firestore,
  convertCollectionsSnapshot,
} from "../../firebase/firebase.utils";

export const fetchCollectionsSuccess = (collections) => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections,
  };
};

export const fetchCollectionsFailure = (error) => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error,
  };
};

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshot(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => {
        dispatch(fetchCollectionsFailure(error.message));
      });
  };
};
