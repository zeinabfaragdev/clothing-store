import ShopActionTypes from "./shop-types";

export const updateCollections = (collections) => {
  return {
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collections,
  };
};
