import React from "react";
import CustomButton from "../customButton/custom-button.component";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={CartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);
const mapstatetoprops = ({ cart: { cartItems } }) => ({ cartItems });
export default connect(mapstatetoprops)(CartDropDown);
