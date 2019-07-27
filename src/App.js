import React, { Component } from "react";
import Homepage from "./pages/Homepage/homepage.component";
import Shoppage from "./pages/shop/shop.component";
import "./App.css";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Shop" component={Shoppage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
