Tinytest.add('Add, update and delete customer', function (test) {
	var token = Stripe.tokens.create({
		'card[number]': '4242424242424242',
		'card[exp_month]': 12,
		'card[exp_year]': 2016,
		'card[cvc]': '123'
	});

	var cust = Stripe.customers.create({
		description: 'Customer for test@example.com',
		source: token.data.id,
		email: 'test@test.com'
	});

	test.equal(cust.data.email, 'test@test.com', 'Missing email');

	var cust = Stripe.customers.update(cust.data.id, {
		email: 'test2@test.com'
	});

	test.equal(cust.data.email, 'test2@test.com', 'Missing email');

	var response = Stripe.customers.del(cust.data.id);
	var cust = Stripe.customers.retrieve(cust.data.id);

	test.isTrue(cust.data.deleted);
});