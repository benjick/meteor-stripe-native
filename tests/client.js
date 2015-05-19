Tinytest.add('Is Stripe client loaded?', function(test) {
	test.isNotUndefined(Stripe);
});

Tinytest.add('Is Stripe checkout loaded?', function(test) {
	test.isNotUndefined(StripeCheckout);
});