import React from "react";

import "./sign-in-and-sign-up.style.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/signup/signup.component";
const SignInAndSignUp = () => (
  <div className="Sign-in-And-Sign-Up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
