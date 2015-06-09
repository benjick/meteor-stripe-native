Stripe.accounts = {};
Stripe.account = {};

Stripe.accounts.create = function(object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}
	
	return HTTP.call('POST', Stripe.baseUrl + 'accounts', options).data;
}

Stripe.account.retrieve = function(id) {
	var options = {
		auth: Stripe.secretKey
	}
	
	if(typeof(id) === 'undefined') {
		return HTTP.call('GET', Stripe.baseUrl + 'account', options).data;
	}
	else {
		return HTTP.call('GET', Stripe.baseUrl + 'accounts/' + id, options).data;
	}
}

Stripe.accounts.update = function(id, object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}
	
	return HTTP.call('POST', Stripe.baseUrl + 'accounts/' + id, options).data;
}

Stripe.accounts.list = function(object) {
	var options = {
		auth: Stripe.secretKey
	}
	
	return HTTP.call('GET', Stripe.baseUrl + 'accounts', options).data;
}