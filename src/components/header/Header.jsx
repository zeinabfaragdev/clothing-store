import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./header.scss";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/CartIcon";
import CartDropDown from "../cart-dropdown/CartDropDown";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => {
  const currentUser = useSelector(({ user: { currentUser } }) => currentUser);

  const hidden = useSelector(({ cart: { hidden } }) => hidden);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropDown />}
    </div>
  );
};

export default Header;
