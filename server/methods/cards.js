Stripe.customers.createSource = function(id, source) {
	var options = {
		auth: Stripe.secretKey,
		params: {
			source: source
		}
	}
	
	return HTTP.call('POST', Stripe.baseUrl + 'customers/' + id + '/sources', options);

}

Stripe.customers.retrieveCard = function(id, cardId) {
	var options = {
		auth: Stripe.secretKey
	}
	
	return HTTP.call('GET', Stripe.baseUrl + 'customers/' + id + '/cards/' + cardId, options);
}

Stripe.customers.updateCard = function(id, cardId, object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}
	
	return HTTP.call('POST', Stripe.baseUrl + 'customers/' + id + '/sources/' + cardId, options)
}

Stripe.customers.deleteCard = function(id, cardId) {
	var options = {
		auth: Stripe.secretKey
	}
	
	return HTTP.call('DELETE', Stripe.baseUrl + 'customers/' + id + '/sources/' + cardId, options);
}

Stripe.customers.listCards = function(id, object) {
	var options = {
		auth: Stripe.secretKey,
		params: object
	}
	
	return HTTP.call('GET', Stripe.baseUrl + 'customers/' + id + '/sources', options);
}