/*Tinytest.add('Create charge', function (test) {
	var token = Stripe.tokens.create({
		'card[number]': '4242424242424242',
		'card[exp_month]': 12,
		'card[exp_year]': 2016,
		'card[cvc]': '123'
	});

	var result = Stripe.charges.create({
		amount: 400,
		currency: "sek",
		source: token.data.id,
		description: "Charge for test@example.com"
	})

	test.equal(true, result.data.paid);
});*/

Tinytest.add('Get charges', function (test) {
	var result = Stripe.charges.list();
	test.ok();
})