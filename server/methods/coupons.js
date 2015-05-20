Stripe.coupons = {};

Stripe.coupons.create = function(object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}
	
	return HTTP.call('POST', Stripe.baseUrl + 'coupons', options)
}

Stripe.coupons.retrieve = function(id) {
	var options = {
		auth: Stripe.secretKey
	}
	
	return HTTP.call('GET', Stripe.baseUrl + 'coupons/' + id, options);
}

Stripe.coupons.update = function(id, object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}
	
	return HTTP.call('POST', Stripe.baseUrl + 'coupons/' + id, options)
}

Stripe.coupons.del = function(id) {
	var options = {
		auth: Stripe.secretKey
	}
	
	return HTTP.call('DELETE', Stripe.baseUrl + 'coupons/' + id, options);
}

Stripe.coupons.list = function() {
	var options = {
		auth: Stripe.secretKey
	}
	
	return HTTP.call('GET', Stripe.baseUrl + 'coupons', options);
}