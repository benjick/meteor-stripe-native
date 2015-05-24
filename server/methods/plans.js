Stripe.plans = {};

Stripe.plans.create = function(object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}
	
	return HTTP.call('POST', Stripe.baseUrl + 'plans', options).data;
}

Stripe.plans.retrieve = function(id) {
	var options = {
		auth: Stripe.secretKey
	}
	
	return HTTP.call('GET', Stripe.baseUrl + 'plans/' + id, options).data;
}

Stripe.plans.update = function(id, object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}
	
	return HTTP.call('POST', Stripe.baseUrl + 'plans/' + id, options).data;
}

Stripe.plans.del = function(id) {
	var options = {
		auth: Stripe.secretKey
	}
	
	return HTTP.call('DELETE', Stripe.baseUrl + 'plans/' + id, options).data;
}

Stripe.plans.list = function(object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}
	
	return HTTP.call('GET', Stripe.baseUrl + 'plans', options).data;
}