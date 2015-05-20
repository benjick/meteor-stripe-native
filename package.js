Package.describe({
  name: 'benjick:stripe-native',
  version: '0.3.0',
  summary: 'Implementing the Stripe API as a Meteor package without the Node module',
  git: 'https://github.com/benjick/meteor-stripe-native.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('client/js.html', 'client');
  api.addFiles([
    'server/init.js',
    'server/methods/charges.js',
    'server/methods/refunds.js',
    'server/methods/customers.js',
    'server/methods/cards.js',
    'server/methods/subscriptions.js',
    'server/methods/plans.js',
    'server/methods/coupons.js',
    'server/methods/discounts.js',
    'server/methods/invoices.js',
    'server/methods/invoiceItems.js',
    'server/methods/disputes.js',
    'server/methods/transferReversals.js',
    'server/methods/recipients.js',
    'server/methods/applicationFees.js',
    'server/methods/applicationFeeRefunds.js',
    'server/methods/accounts.js',
    'server/methods/balance.js',
    'server/methods/events.js',
    'server/methods/tokens.js',
    'server/methods/bitcoinReceivers.js',
    'server/methods/fileUploads.js',
    'server/methods/discounts.js',

  ], 'server');
  api.use('http','server');
  api.use('templating','client')
  api.export('Stripe','server')
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use(['benjick:stripe-native']);
  api.addFiles('tests/client.js','client');
  api.addFiles([
    'tests/init.js',
    'tests/charges.js',
    'tests/refunds.js',
    'tests/customers.js',
    'tests/cards.js',
    'tests/subscriptions.js',
    'tests/plans.js',
    'tests/coupons.js',
    'tests/discounts.js',
  ],'server');
});
