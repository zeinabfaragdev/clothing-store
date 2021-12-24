import React from "react";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";
import "./signinpage.scss";

const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInPage;
