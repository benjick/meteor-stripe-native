Stripe.customers = {};

Stripe.customers.create = function (object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}
	
	return HTTP.call('POST', Stripe.baseUrl + 'customers', options);
}

Stripe.customers.retrieve = function (id) {
	var options = {
		auth: Stripe.secretKey
	}

	return HTTP.call('GET', Stripe.baseUrl + 'customers/' + id, options);
}

Stripe.customers.update = function (id, object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}

	return HTTP.call('POST', Stripe.baseUrl + 'customers/' + id, options);

}

Stripe.customers.del = function (id) {
	var options = {
		auth: Stripe.secretKey
	}

	return HTTP.call('DELETE', Stripe.baseUrl + 'customers/' + id, options);

}

Stripe.customers.list = function (object) {
	var options = {
		auth: Stripe.secretKey
	}

	return HTTP.call('GET', Stripe.baseUrl + 'customers', options);

}