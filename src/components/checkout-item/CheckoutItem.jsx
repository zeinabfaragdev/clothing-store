import React from "react";
import "./checkoutitem.scss";
import { useDispatch } from "react-redux";
import {
  clearCartItem,
  decreaseCartItem,
  addCartItem,
} from "../../redux/cart/cart-actions";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, quantity, price, id } = item;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(decreaseCartItem(item))}>
          &#10094;
        </div>
        <span className="value"> {quantity}</span>
        <div className="arrow" onClick={() => dispatch(addCartItem(item))}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div
        onClick={() => dispatch(clearCartItem(id))}
        className="remove-button"
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
