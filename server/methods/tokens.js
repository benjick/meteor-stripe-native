Stripe.tokens = {};

Stripe.tokens.create = function (object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}
	
	try {
		var result = HTTP.call('POST', Stripe.baseUrl + 'tokens', options);
	}
	catch (e) {
		throw new Meteor.Error("HTTP error", "Something went wrong");
	}

	return result;
}

Stripe.tokens.retrieve = function (id) {
	var options = {
		auth: Stripe.secretKey
	}

	return HTTP.call('GET', Stripe.baseUrl + 'tokens/' + id, options);

}