import React from "react";
import CustomButton from "../custom-button/CustomButton";
import { useSelector } from "react-redux";
import "./cartdropdown.scss";

const CartDropDown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>

      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropDown;
