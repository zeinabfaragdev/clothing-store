import React from "react";
import "./collectionsoverview.scss";
import { useSelector } from "react-redux";
import CollectionPreview from "../collection-preview/CollectionPreview";

const CollectionsOverview = () => {
  const collections = useSelector((state) => state.collections);
  return (
    <div className="collections-overview">
      {Object.values(collections).map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
