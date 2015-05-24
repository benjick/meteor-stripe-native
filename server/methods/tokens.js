Stripe.tokens = {};

Stripe.tokens.create = function (object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}

	return HTTP.call('POST', Stripe.baseUrl + 'tokens', options).data;
}

Stripe.tokens.retrieve = function (id) {
	var options = {
		auth: Stripe.secretKey
	}

	return HTTP.call('GET', Stripe.baseUrl + 'tokens/' + id, options).data;

}