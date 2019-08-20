import React from "react";
import "./checkoutPage.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  selectCartItems,
  selectCarttotal
} from "../../redux/cart/cart.selector";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>Total : ${total}</span>
    </div>
    <div className="test-warning">
      *please use following test credit card for payments*
      <br />
      4242 4242 4242 4242 - EXP : 01/20 123 -CVV 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);
const mapstatetoprops = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCarttotal
});
export default connect(mapstatetoprops)(CheckoutPage);
