import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./carticon.scss";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { useDispatch } from "react-redux";

function CartIcon() {
  const dispatch = useDispatch();
  return (
    <div
      className="cart-icon"
      onClick={() => {
        dispatch(toggleCartHidden());
      }}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIcon;
