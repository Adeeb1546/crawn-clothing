import React, { Component } from "react";
import { Route } from "react-router-dom";
import CollectionsOverView from "../../components/collections-overview/collections-overview.component";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import CollectionPage from "../collection/collection.component";
import Withspinner from "../../components/with-spinner/with-spinner.component";
import { connect } from "react-redux";
import { updatecollections } from "../../redux/shop/shop.actions";
const CollectionOverViewWithSpinner = Withspinner(CollectionsOverView);
const CollectionPagewithSpinner = Withspinner(CollectionPage);
class Shop extends Component {
  state = {
    loading: true
  };
  unsubscribefromcollections = null;
  componentDidMount() {
    const { updatecollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.get().then(snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);

      updatecollections(collectionMap);
      this.setState({ loading: false });
    });
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverViewWithSpinner isloading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPagewithSpinner isloading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}
const mapdispatchtoprops = dispatch => ({
  updatecollections: collectionMap => dispatch(updatecollections(collectionMap))
});
export default connect(
  null,
  mapdispatchtoprops
)(Shop);
