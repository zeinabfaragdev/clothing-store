import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/CartIcon";
import CartDropDown from "../cart-dropdown/CartDropDown";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from "./header.styles";

const Header = () => {
  const currentUser = useSelector(({ user: { currentUser } }) => currentUser);

  const hidden = useSelector(({ cart: { hidden } }) => hidden);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropDown />}
    </HeaderContainer>
  );
};

export default Header;
