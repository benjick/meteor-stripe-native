Tinytest.add('define Stripe', function (test) {
	test.isNotUndefined(Stripe, 'Stripe is not defined');
});

Tinytest.add('define secret key', function (test) {
	test.isNotUndefined(Stripe.secretKey, 'Secret key not found');
});