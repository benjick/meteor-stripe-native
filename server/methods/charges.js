// https://stripe.com/docs/api/node#charges

Stripe.charges = {};

Stripe.charges.create = function(object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}
	
	return HTTP.call('POST', Stripe.baseUrl + 'charges', options);
}

Stripe.charges.retrieve = function(id) {
	var options = {
		auth: Stripe.secretKey
	}

	return HTTP.call('GET', Stripe.baseUrl + 'charges/' + id, options);
}

Stripe.charges.update = function(id, object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}

	return HTTP.call('POST', Stripe.baseUrl + 'charges/' + id, options);
}

Stripe.charges.capture = function(id) {
	var options = {
		auth: Stripe.secretKey
	}

	return HTTP.call('POST', Stripe.baseUrl + 'charges/' + id + '/capture/', options);
}

Stripe.charges.list = function() {
	var options = {
		auth: Stripe.secretKey
	}

	try {
		var result = HTTP.call('GET', Stripe.baseUrl + 'charges', options);
	}
	catch (e) {
		throw new Meteor.Error("HTTP error", "Something went wrong");
	}

	return result.data.data;
}