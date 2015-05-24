Stripe.customers.createSubscription = function(id, object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}
	
	return HTTP.call('POST', Stripe.baseUrl + 'customers/' + id + '/subscriptions', options).data;
}

Stripe.customers.retrieveSubscription = function(id, subId) {
	var options = {
		auth: Stripe.secretKey
	}
	
	return HTTP.call('GET', Stripe.baseUrl + 'customers/' + id + '/subscriptions/' + subId, options).data;

}

Stripe.customers.updateSubscription = function(id, subId, object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}
	
	return HTTP.call('POST', Stripe.baseUrl + 'customers/' + id + '/subscriptions/' + subId, options).data;
}

Stripe.customers.cancelSubscription = function(id, subId) {
	var options = {
		auth: Stripe.secretKey
	}
	
	return HTTP.call('DELETE', Stripe.baseUrl + 'customers/' + id + '/subscriptions/' + subId, options).data;
}

Stripe.customers.listSubscriptions = function(id) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}
	
	return HTTP.call('GET', Stripe.baseUrl + 'customers/' + id + '/subscriptions', options).data;
}