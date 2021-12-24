import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./signup.scss";

class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      alert("passwords dont match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        this.state.email,
        this.state.password
      );

      await createUserProfileDocument(user, {
        displayName: this.state.displayName,
      });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        error: "",
      });
    } catch (error) {
      if (error.code === "auth/weak-password") {
        this.setState({ error: "Password should be at least 6 characters" });
      } else if (error.code === "auth/email-already-in-use") {
        this.setState({
          error: "Email already saved in database, please sign in!",
        });
      } else {
        this.setState({ error: error.message });
      }
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>

        <div id="error">{this.state.error}</div>
      </div>
    );
  }
}

export default SignUp;
