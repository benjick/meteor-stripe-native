## Stripe (native) [![Build Status](https://travis-ci.org/benjick/meteor-stripe-native.svg?branch=master)](https://travis-ci.org/benjick/meteor-stripe-native)

Implementing the Stripe API natively in Meteor, no need for wrapAsync.

This package also includes [Stripe.js](https://stripe.com/docs/stripe.js) and [Stripe Checkout](https://stripe.com/docs/checkout). See bottom of readme under "Client"

See full docs at https://stripe.com/docs/api/node but note some differences 

## Install

Using Meteor's Package System:

  $ meteor add benjick:stripe-native

## Implemented methods

* Charges
* Refunds
* Customers
* Cards
* Subscriptions (missing tests)
* Plans
* Coupons
* Discounts (missing tests)
* Application fees (missing tests)
* Account (need more tests)
* Tokens

## Differences with the node module

### No callbacks

For example:

#### server-side

```js
Meteor.methods({
  charge: function (token) {
    this.unblock();
    check(token, String);

    try {
      var result = Stripe.charges.create({
        amount: 400,
        currency: 'sek',
        source: token.id,
        description: "Imma chargin' mah lazer"
      });

      // do something with result, save to db maybe?

      return true;
    }
    catch {
      throw new Meteor.Error('payment-failed', 'The payment failed');
    }
  }
});
```

#### client-side

```js
Meteor.call('charge', token, function (error, result) {
  console.log(error);
  console.log(result);
});
```

### Stripe secret key is read from the environment variable STRIPE_SECRET

```js
Stripe.secretKey = process.env.STRIPE_SECRET + ':null';
```

### HTTP doesn't parse params correct, so nested objects is a bit special:

node-stripe:

```js
var Stripe = require("stripe")(
  "sk_test_xxx"
);

Stripe.coupons.update("25OFF", {
  metadata: {key: "value"}
)
```

meteor-stripe-native:

```js
Stripe.coupons.update("25OFF", {
  'metadata[key]': 'value'
})
```

## Client

Stripe.js is now loaded directly from stripe.com and this happens after all other Meteor scripts are loaded. As such, the `Stripe` variable is not immediately available for use so instead, calls need to be deferred until after your Meteor app has started, like so:

```js
Meteor.startup(function() {
    Stripe.setPublishableKey('YOUR_PUBLISHABLE_KEY');
});
```

The same goes for Stripe Checkout, too:

```js
Meteor.startup(function() {
    var handler = StripeCheckout.configure({
    key: 'YOUR_PUBLISHABLE_KEY',
    token: function(token) {}
  });
});
```