import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./carticon.scss";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { useDispatch, useSelector } from "react-redux";

function CartIcon() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  let count = cartItems.reduce((a, b) => a + b.quantity, 0);

  return (
    <div
      className="cart-icon"
      onClick={() => {
        dispatch(toggleCartHidden());
      }}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
}

export default CartIcon;
