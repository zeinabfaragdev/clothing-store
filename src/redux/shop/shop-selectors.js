import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = memoize((collectionName) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionName]
  )
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.values(collections)
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);
