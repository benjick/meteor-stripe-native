[![Build Status](https://travis-ci.org/benjick/meteor-stripe-native.svg?branch=master)](https://travis-ci.org/benjick/meteor-stripe-native)

## Stripe Meteor (native)

Implementing the Stripe API natively in Meteor, no need for wrapAsync

### Implemented methods

* Charges
* Refunds
* Customers
* Cards
* Subscriptions
* Plans
* Tokens

### Differences with the node module

* Class starts with a big S (Stripe vs stripe)
* HTTP doesn't parse params correct, so nested objects is a bit special:

node-stripe:

```js
stripe.tokens.create({
  card: {
    "number": '4242424242424242',
    "exp_month": 12,
    "exp_year": 2016,
    "cvc": '123'
  }
}, function(err, token) {
  // asynchronously called
});
```

meteor-stripe-native:

```js
var result = Stripe.tokens.create({
	'card[number]': '4242424242424242',
	'card[exp_month]': 12,
	'card[exp_year]': 2016,
	'card[cvc]': '123'
});
```