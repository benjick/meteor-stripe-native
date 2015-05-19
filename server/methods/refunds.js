Stripe.charges.createRefund = function(id, object) {
	var object = object || null
	var options = {
		auth: Stripe.secretKey,
		params: object
	}

	return HTTP.call('POST', 'https://api.stripe.com/v1/charges/' + id + '/refunds', options);
}

Stripe.charges.retrieveRefund = function(id, charge) {
	var options = {
		auth: Stripe.secretKey
	}

	return HTTP.call('GET', 'https://api.stripe.com/v1/charges/' + id + '/refunds/' + charge, options);
}

Stripe.charges.updateRefund = function(id, charge, object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}

	return HTTP.call('POST', 'https://api.stripe.com/v1/charges/' + id + '/refunds/' + charge, options);
}

Stripe.charges.listRefunds = function(id, object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}

	return HTTP.call('GET', 'https://api.stripe.com/v1/charges/' + id + '/refunds', options);
}