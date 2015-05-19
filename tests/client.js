Tinytest.add('Is Stripe client loaded?', function(test) {
	test.isTrue(Stripe != null);
});

Tinytest.add('Is Stripe checkout loaded?', function(test) {
	test.isTrue(StripeCheckout != null);
});