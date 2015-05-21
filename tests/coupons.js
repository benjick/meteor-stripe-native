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

	var coupon = Stripe.coupons.retrieve(coupon.data.id);

	test.equal(coupon.data.metadata.updated, 'yes')

	var before = Stripe.coupons.list();

	Stripe.coupons.del(coupon.data.id);

	var after = Stripe.coupons.list();

	test.notEqual(before.data.data.length, after.data.data.length)
})