import React, { useEffect, useState } from "react";
import {
  firestore,
  convertCollectionsSnapshot,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop-actions";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import withSpinner from "../../components/with-spinner/withSpinner";
import CollectionPage from "../collection/CollectionPage";

const ShopPage = () => {
  let [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshot(snapshot);
      dispatch(updateCollections(collectionsMap));
      setLoading(false);
    });
  }, [dispatch]);

  const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
  const CollectionsPageWithSpinner = withSpinner(CollectionPage);

  return (
    <div className="shop-page">
      <Routes>
        <Route
          path="/"
          element={<CollectionsOverviewWithSpinner isLoading={loading} />}
        />
        <Route
          path="/:collection"
          element={<CollectionsPageWithSpinner isLoading={loading} />}
        />
      </Routes>
    </div>
  );
};

export default ShopPage;
