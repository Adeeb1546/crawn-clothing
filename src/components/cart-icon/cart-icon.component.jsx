import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.action";
const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapstatetoprops = state => ({
  itemCount: selectCartItemsCount(state)
});
const mapdispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
export default connect(
  mapstatetoprops,
  mapdispatchToProps
)(CartIcon);
