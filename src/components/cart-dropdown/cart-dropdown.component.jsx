import React from "react";
import CustomButton from "../customButton/custom-button.component";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);
const mapstatetoprops = state => ({
  cartItems: selectCartItems(state)
});
export default connect(mapstatetoprops)(CartDropDown);
