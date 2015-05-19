Stripe.customers = {};

Stripe.customers.create = function (object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}
	
	return HTTP.call('POST', 'https://api.stripe.com/v1/customers', options);
}

Stripe.customers.retrieve = function (id) {
	var options = {
		auth: Stripe.secretKey
	}

	return HTTP.call('GET', 'https://api.stripe.com/v1/customers/' + id, options);
}

Stripe.customers.update = function (id, object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}

	return HTTP.call('POST', 'https://api.stripe.com/v1/customers/' + id, options);

}

Stripe.customers.del = function (id) {
	var options = {
		auth: Stripe.secretKey
	}

	return HTTP.call('DELETE', 'https://api.stripe.com/v1/customers/' + id, options);

}

Stripe.customers.list = function (object) {
	var options = {
		auth: Stripe.secretKey
	}

	return HTTP.call('GET', 'https://api.stripe.com/v1/customers', options);

}