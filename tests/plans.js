Tinytest.add('Do everything with plans', function (test) {

	var newName = 'Wonderful Silver plan'

	Stripe.plans.create({ 
		amount: 2000, 
		interval: "month", 
		name: "Amazing Gold Plan", 
		currency: "sek", 
		id: "unittest_gold" 
	})

	Stripe.plans.create({ 
		amount: 1000, 
		interval: "month", 
		name: "Amazing Silver Plan", 
		currency: "sek", 
		id: "unittest_silver" 
	})

	Stripe.plans.update('unittest_silver', {
		name: newName
	})

	var silver = Stripe.plans.retrieve('unittest_silver');
	test.equal(silver.data.name, newName, 'Wrong name');
	
	var plans = Stripe.plans.list();
	plans.data.data.forEach(function(plan) {
		console.log(plan.id.substring(0,9));
		if(plan.id.substring(0,9) === 'unittest_') {
			Stripe.plans.del(plan.id);
		}
	})

});