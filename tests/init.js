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

Tinytest.add('define:Stripe.plans', function (test) {
	test.isNotUndefined(Stripe.plans, 'Stripe.plans is not defined');
});

Tinytest.add('define:Stripe.coupons', function (test) {
	test.isNotUndefined(Stripe.coupons, 'Stripe.coupons is not defined');
});

Tinytest.add('define:Stripe.accounts/account', function (test) {
	test.isNotUndefined(Stripe.accounts, 'Stripe.accounts is not defined');
	test.isNotUndefined(Stripe.account, 'Stripe.account is not defined');
});
