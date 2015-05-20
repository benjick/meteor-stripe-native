Tinytest.add('Card declined', function (test) {
	var token = Stripe.tokens.create({
		'card[number]': '4000000000000002',
		'card[exp_month]': 12,
		'card[exp_year]': 2016,
		'card[cvc]': '123'
	});

	try {
		var result = Stripe.charges.create({
			amount: 400,
			currency: "sek",
			source: token.data.id,
			description: "Charge for test@example.com"
		})

		test.fail();
	}
	catch (e) {
		console.log(e.error);
		test.ok(e);
	}

});

Tinytest.add('Get charges', function (test) {
	var result = Stripe.charges.list();
	test.ok();
})