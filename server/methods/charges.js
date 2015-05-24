// https://stripe.com/docs/api/node#charges

Stripe.charges = {};

Stripe.charges.create = function(object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}
	
	return HTTP.call('POST', Stripe.baseUrl + 'charges', options).data;
}

Stripe.charges.retrieve = function(id) {
	var options = {
		auth: Stripe.secretKey
	}

	return HTTP.call('GET', Stripe.baseUrl + 'charges/' + id, options).data;
}

Stripe.charges.update = function(id, object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}

	return HTTP.call('POST', Stripe.baseUrl + 'charges/' + id, options).data;
}

Stripe.charges.capture = function(id) {
	var options = {
		auth: Stripe.secretKey
	}

	return HTTP.call('POST', Stripe.baseUrl + 'charges/' + id + '/capture/', options).data;
}

Stripe.charges.list = function() {
	var options = {
		auth: Stripe.secretKey
	}

	return HTTP.call('GET', Stripe.baseUrl + 'charges', options).data;
}