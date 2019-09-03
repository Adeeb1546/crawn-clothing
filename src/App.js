import React, { Component } from "react";
import Homepage from "./pages/Homepage/homepage.component";
import Shoppage from "./pages/shop/shop.component";
import "./App.css";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user.action";
import Withspinner from "./components/with-spinner/with-spinner.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import CheckoutPage from "./pages/CheckoutPage/checkoutPage.component";
import { selectCollectionsForPreview } from "./redux/shop/shopSelectors";

const HomepageWithSpinner = Withspinner(Homepage);
const ShopPageWithSpinner = Withspinner(Shoppage);
const CheckOutWithSpinner = Withspinner(CheckoutPage);
const SignInAndSignUpWithSpinner = Withspinner(SignInAndSignUp);
class App extends Component {
  state = {
    loading: true
  };
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    //collectionArray
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
      //   AddCollectionAndDocument(
      //     "collections",
      //     collectionArray.map(({ title, items }) => ({ title, items }))
      //   );
    });
    this.setState({ loading: false });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    const { loading } = this.setState;
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <HomepageWithSpinner isloading={loading} {...props} />
            )}
          />
          <Route
            path="/Shop"
            render={props => (
              <ShopPageWithSpinner isloading={loading} {...props} />
            )}
          />{" "}
          />
          <Route
            exact
            path="/checkout"
            render={props => (
              <CheckOutWithSpinner isloading={loading} {...props} />
            )}
          />
          <Route
            exact
            path="/signin"
            render={props =>
              this.props.CurrentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpWithSpinner isloading={loading} {...props} />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  setCurrentUser: selectCurrentUser,
  collectionArray: selectCollectionsForPreview
});
const mapdispatchtoProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(
  mapStateToProps,
  mapdispatchtoProps
)(App);
