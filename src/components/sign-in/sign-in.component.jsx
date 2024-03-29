import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../customButton/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handlesubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>i already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handlesubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            autoComplete="on"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            autoComplete="on"
            required
          />
          <div className="buttons">
            <CustomButton type="submit" value="submit form">
              sign in
            </CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              signIn with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
