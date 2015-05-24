Tinytest.add('Add, update and delete customer', function (test) {
	var token = Stripe.tokens.create({
		'card[number]': '4242424242424242',
		'card[exp_month]': 12,
		'card[exp_year]': 2016,
		'card[cvc]': '123'
	});

	var cust = Stripe.customers.create({
		description: 'Customer for test@example.com',
		source: token.id,
		email: 'test@test.com'
	});

	test.equal(cust.email, 'test@test.com', 'Missing email');

	var cust = Stripe.customers.update(cust.id, {
		email: 'test2@test.com'
	});

	test.equal(cust.email, 'test2@test.com', 'Missing email');

	var response = Stripe.customers.del(cust.id);
	var cust = Stripe.customers.retrieve(cust.id);

	test.isTrue(cust.deleted);
});