import React from "react";
import CustomButton from "../custom-button/CustomButton";
import "./cartdropdown.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropDown;
