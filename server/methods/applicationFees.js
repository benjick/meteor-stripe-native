Stripe.applicationFees = {};

Stripe.applicationFees.retrieve = function(id) {
	var options = {
		auth: Stripe.secretKey
	}

	return HTTP.call('GET', Stripe.baseUrl + 'application_fees/' + id, options);
}

Stripe.applicationFees.list = function(object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}

	return HTTP.call('GET', Stripe.baseUrl + 'application_fees', options);
}