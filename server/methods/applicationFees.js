Stripe.applicationFees = {};

Stripe.applicationFees.retrieve = function(id) {
	var options = {
		auth: Stripe.secretKey
	}

	return HTTP.call('GET', 'https://api.stripe.com/v1/application_fees/' + id, options);
}

Stripe.applicationFees.list = function(object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}

	return HTTP.call('GET', 'https://api.stripe.com/v1/application_fees', options);
}