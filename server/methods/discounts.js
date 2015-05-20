Stripe.customers.deleteDiscount = function(id) {
	var options = {
		auth: Stripe.secretKey
	}
	
	return HTTP.call('DELETE', Stripe.baseUrl + 'customers/' + id + '/discount', options);
}

Stripe.customers.deleteSubscriptionDiscount = function(id, subId) {
	var options = {
		auth: Stripe.secretKey
	}
	
	return HTTP.call('DELETE', Stripe.baseUrl + 'customers/' + id + '/subscriptions/' + subId + '/discount', options);
}