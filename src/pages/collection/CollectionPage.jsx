import React from "react";
import "./collectionpage.scss";
import { useMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop-selectors";

import CollectionItem from "../../components/collection-item/CollectionItem";

const CollectionPage = () => {
  const match = useMatch("/shop/:collection");
  const collectionName = match.params.collection;
  const collection = useSelector(selectCollection(collectionName));

  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title} </h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
