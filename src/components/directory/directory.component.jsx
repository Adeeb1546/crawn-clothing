import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { selectDirectoryItem } from "../../redux/directory/directiorySelector";
import { createStructuredSelector } from "reselect";
const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...othersectionprops }) => (
      <MenuItem key={id} {...othersectionprops} />
    ))}
  </div>
);
const mapstatetoprops = createStructuredSelector({
  sections: selectDirectoryItem
});
export default connect(mapstatetoprops)(Directory);
