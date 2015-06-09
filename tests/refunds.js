Tinytest.add('Create charge and refund it', function (test) {
	var token = Stripe.tokens.create({
		'card[number]': '4242424242424242',
		'card[exp_month]': 12,
		'card[exp_year]': 2016,
		'card[cvc]': '123'
	});

	var charge = Stripe.charges.create({
		amount: 1337,
		currency: "sek",
		source: token.id,
		description: "Charge for test@example.com"
	})

	var result = Stripe.charges.createRefund(charge.id);
});