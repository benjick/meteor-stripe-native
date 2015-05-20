Tinytest.add('define:Stripe', function (test) {
	test.isNotUndefined(Stripe, 'Stripe is not defined');
});

Tinytest.add('define:Stripe.secretKey', function (test) {
	test.isNotUndefined(Stripe.secretKey, 'Secret key not found');
});

Tinytest.add('define:Stripe.charges', function (test) {
	test.isNotUndefined(Stripe.charges, 'Stripe.charges is not defined');
});

Tinytest.add('define:Stripe.customers', function (test) {
	test.isNotUndefined(Stripe.customers, 'Stripe.customers is not defined');
});
