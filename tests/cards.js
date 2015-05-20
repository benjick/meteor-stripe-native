Tinytest.add('Create customer, add card, charge card, delete card, delete customer', function (test) {
	var token = Stripe.tokens.create({
		'card[number]': '4242424242424242',
		'card[exp_month]': 12,
		'card[exp_year]': 2016,
		'card[cvc]': '123'
	});

	var cust = Stripe.customers.create({
		description: 'Customer for test@example.com',
		email: 'test@test.com'
	});

	var newcard = Stripe.customers.createSource(cust.data.id, token.data.id)

	Stripe.customers.deleteCard(cust.data.id, newcard.data.id)
	var cards = Stripe.customers.listCards(cust.data.id);
	test.equal(cards.data.data.length, 0)

	Stripe.customers.del(cust.data.id);
	var cust = Stripe.customers.retrieve(cust.data.id);

	test.isTrue(cust.data.deleted);
});