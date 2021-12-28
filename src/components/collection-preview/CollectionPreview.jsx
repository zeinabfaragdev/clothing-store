import React from "react";
import "./collectionpreview.scss";
import { Link } from "react-router-dom";
import CollectionItem from "../collection-item/CollectionItem";

const CollectionPreview = ({ title, items, routeName }) => {
  return (
    <div className="collection-preview">
      <Link to={`/shop/${routeName}`} className="title">
        {title.toUpperCase()}
      </Link>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
