import React, { useEffect } from "react";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop-actions";
import { useDispatch, useSelector } from "react-redux";
import { selectIsCollectionFetching } from "../../redux/shop/shop-selectors";
import { Routes, Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import withSpinner from "../../components/with-spinner/withSpinner";
import CollectionPage from "../collection/CollectionPage";

const ShopPage = () => {
  let loading = useSelector(selectIsCollectionFetching);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
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
