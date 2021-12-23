import React from "react";
import "./custombutton.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${isGoogleSignIn ? "google-sign-in" : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
