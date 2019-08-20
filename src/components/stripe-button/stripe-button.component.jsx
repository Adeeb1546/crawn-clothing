import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceforStripe = price * 100;

  const Publishablekey = "pk_test_zVNLRYjWwIJCQDDl7lXAQss800r6LZj9f9";
  const ontoken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceforStripe}
      panelLabel="Pay Now"
      token={ontoken}
      stripeKey={Publishablekey}
    />
  );
};
export default StripeCheckoutButton;
