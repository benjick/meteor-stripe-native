Tinytest.add('Do everything with coupons', function (test) {
	var coupon = Stripe.coupons.create({
		percent_off: 12,
		duration: 'repeating',
		duration_in_months: 3,
		id: '25OFF'
	});

	Stripe.coupons.update("25OFF", {
		'metadata[updated]': 'yes'
	})

	var coupon = Stripe.coupons.retrieve(coupon.id);

	test.equal(coupon.metadata.updated, 'yes')

	var before = Stripe.coupons.list();

	Stripe.coupons.del(coupon.id);

	var after = Stripe.coupons.list();

	test.notEqual(before.data.length, after.data.length)
})