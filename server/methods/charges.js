// https://stripe.com/docs/api/node#charges

Stripe.charges = {};

Stripe.charges.create = function(object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}
	
	return HTTP.call('POST', 'https://api.stripe.com/v1/charges', options);
}

Stripe.charges.retrieve = function(id) {
	var options = {
		auth: Stripe.secretKey
	}

	return HTTP.call('GET', 'https://api.stripe.com/v1/charges/' + id, options);
}

Stripe.charges.update = function(id, object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}

	return HTTP.call('POST', 'https://api.stripe.com/v1/charges/' + id, options);
}

Stripe.charges.capture = function(id) {
	var options = {
		auth: Stripe.secretKey
	}

	return HTTP.call('POST', 'https://api.stripe.com/v1/charges/' + id + '/capture/', options);
}

Stripe.charges.list = function() {
	var options = {
		auth: Stripe.secretKey
	}

	try {
		var result = HTTP.call('GET', 'https://api.stripe.com/v1/charges', options);
	}
	catch (e) {
		throw new Meteor.Error("HTTP error", "Something went wrong");
	}

	return result.data.data;
}