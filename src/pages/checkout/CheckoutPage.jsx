import React from "react";
import { useSelector } from "react-redux";
import {
  selectCartItemsTotal,
  selectCartItems,
} from "../../redux/cart/cart-selectors";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import "./checkoutpage.scss";
import StripeButton from "../../components/stripe-button/StripeButton";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartItemsTotal);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} item={item} />;
      })}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <StripeButton price={total} />
    </div>
  );
};

export default CheckoutPage;
