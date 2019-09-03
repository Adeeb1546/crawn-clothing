import React, { Component } from "react";
import { Route } from "react-router-dom";
import CollectionsOverView from "../../components/collections-overview/collections-overview.component";
import { createStructuredSelector } from "reselect";
import { SelectIsCollectionFetching } from "../../redux/shop/shopSelectors";
import CollectionPage from "../collection/collection.component";
import Withspinner from "../../components/with-spinner/with-spinner.component";
import { connect } from "react-redux";
import { FetchCollectionStartAsync } from "../../redux/shop/shop.actions";
const CollectionOverViewWithSpinner = Withspinner(CollectionsOverView);
const CollectionPagewithSpinner = Withspinner(CollectionPage);
class Shop extends Component {
  componentDidMount() {
    const { FetchCollectionStartAsync } = this.props;
    FetchCollectionStartAsync();
  }
  render() {
    const { match, isCollectionFetching } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverViewWithSpinner
              isloading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPagewithSpinner
              isloading={isCollectionFetching}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: SelectIsCollectionFetching
});
const mapdispatchtoprops = dispatch => ({
  FetchCollectionStartAsync: () => dispatch(FetchCollectionStartAsync())
});
export default connect(
  mapStateToProps,
  mapdispatchtoprops
)(Shop);
