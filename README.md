## Stripe (native) [![Build Status](https://travis-ci.org/benjick/meteor-stripe-native.svg?branch=master)](https://travis-ci.org/benjick/meteor-stripe-native)

Implementing the Stripe API natively in Meteor, no need for wrapAsync

See full docs at https://stripe.com/docs/api/node but note some differences 

### Implemented methods

* Charges
* Refunds
* Customers
* Cards
* Subscriptions (missing tests)
* Plans
* Coupons
* Discounts (missing tests)
* Tokens

### Differences with the node module

#### No callbacks

For example:

##### server-side

```js
Meteor.methods({
  charge: function (token) {
    this.unblock();
    check(token, String);

    try {
      var result = Stripe.charges.create({
        amount: 400,
        currency: 'sek',
        source: token.data.id,
        description: 'Imma chargin' mah lazer'
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

##### client-side

```js
Meteor.call('charge', token, function (error, result) {
  console.log(error);
  console.log(result);
});
```

#### Stripe secret key is read from the environment variable STRIPE_SECRET

```js
Stripe.secretKey = process.env.STRIPE_SECRET + ':null';
```

#### HTTP doesn't parse params correct, so nested objects is a bit special:

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
