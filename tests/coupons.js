Tinytest.add('Do everything with coupons', function (test) {
	var coupon = Stripe.coupons.create({
		percent_off: 12,
		duration: 'repeating',
		duration_in_months: 3,
		id: '25OFF'
	});

	var coupon = Stripe.coupons.retrieve(coupon.data.id);

	/*
	//Not working, see: https://github.com/meteor/meteor/issues/4406
	Stripe.coupons.update("25OFF", {
		metadata: {'updated': 'yes'}
	})
	*/

	Stripe.coupons.del(coupon.data.id);

	Stripe.coupons.list();
})