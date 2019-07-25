import React, { Component } from "react";
import Homepage from "./pages/Homepage/homepage.component";
import "./App.css";
import { Switch, Route } from "react-router-dom";
const Hats = () => <h1>Hats page </h1>;
const Jackets = () => <h1>Jackets page </h1>;
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/hats" component={Hats} />
          <Route exact path="/jackets" component={Jackets} />
        </Switch>
      </div>
    );
  }
}

export default App;
