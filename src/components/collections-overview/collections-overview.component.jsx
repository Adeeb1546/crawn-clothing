import React from "react";

import { connect } from "react-redux";
import "./collections-overview.styles.scss";
import { selectShopItem } from "../../redux/shop/shopSelectors";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../Collection-Preview/collection-preview.component";
const CollectionsOverView = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...othercollectionprops }) => (
      <CollectionPreview key={id} {...othercollectionprops} />
    ))}
  </div>
);
const mapstatetoprops = createStructuredSelector({
  collections: selectShopItem
});
export default connect(mapstatetoprops)(CollectionsOverView);
