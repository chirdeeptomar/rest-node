var restify = require('restify');
var routes = require('./routes/routes');


var server = restify.createServer({ name: 'content-api' });
	server.pre(restify.pre.sanitizePath());
	server
  		.use(restify.fullResponse())
  		.use(restify.bodyParser());

server.get('/organisation/:id/:publication', routes.getOrganisationProfile);

server.get('/lawyer/:id/:publication', routes.getLawyerProfile);

server.get('/lawyer/:id', routes.getLawyerProfile);

server.listen(3000, function () {
  console.log('%s listening at %s', server.name, server.url)
});