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

	var newcard = Stripe.customers.createSource(cust.id, token.id)

	Stripe.customers.deleteCard(cust.id, newcard.id)
	var cards = Stripe.customers.listCards(cust.id);
	test.equal(cards.data.length, 0)

	Stripe.customers.del(cust.id);
	var cust = Stripe.customers.retrieve(cust.id);

	test.isTrue(cust.deleted);
});