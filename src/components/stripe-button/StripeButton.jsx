import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KBVZqBmw0InCjDZeydVPP2Awm4MuR8vZZj8LA7E47HehWMm4zbaNQPcauYzwulaRf7v3Su3Wf7ieyGi0fQKbMTI00cWkjTY2J";

  const onToken = (token) => {
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      stripeKey={publishableKey}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
    />
  );
};

export default StripeButton;
