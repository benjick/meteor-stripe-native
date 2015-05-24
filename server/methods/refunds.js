Stripe.charges.createRefund = function(id, object) {
	var object = object || null
	var options = {
		auth: Stripe.secretKey,
		params: object
	}

	return HTTP.call('POST', Stripe.baseUrl + 'charges/' + id + '/refunds', options);
}

Stripe.charges.retrieveRefund = function(id, charge) {
	var options = {
		auth: Stripe.secretKey
	}

	return HTTP.call('GET', Stripe.baseUrl + 'charges/' + id + '/refunds/' + charge, options);
}

Stripe.charges.updateRefund = function(id, charge, object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}

	return HTTP.call('POST', Stripe.baseUrl + 'charges/' + id + '/refunds/' + charge, options);
}

Stripe.charges.listRefunds = function(id, object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}

	return HTTP.call('GET', Stripe.baseUrl + 'charges/' + id + '/refunds', options);
}