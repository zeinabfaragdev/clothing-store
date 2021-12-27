import React from "react";
import CustomButton from "../custom-button/CustomButton";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../redux/cart/cart-actions";
import "./collectionitem.scss";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
      </div>
      <CustomButton onClick={() => dispatch(addCartItem(item))} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
