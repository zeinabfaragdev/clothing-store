import React from "react";
import "./checkoutitem.scss";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../../redux/cart/cart-actions";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, quantity, price, id } = item;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <div
        onClick={() => dispatch(removeCartItem(id))}
        className="remove-button"
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
