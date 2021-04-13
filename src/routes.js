/**
It’s important to mention that the handler can deal with 3 different objects:

a string or {foo: ‘bar’}, which will render either text or json in your browser
A function that returns a reply.response()
A function that returns a Promise which returns a reply.response().
 */
const articlesController = require('./controllers/articlesController.js');

module.exports = [
  // Ping tester
  {
    method: 'GET',
    path: '/ping',
    handler: (_request, reply) => reply.response('pong').code(200),
    config: {
      description: 'Ping-tests',
    },
  },

  // Start
  {
    method: 'GET',
    path: '/',
    handler: articlesController.index,
    config: {
      description: 'get Posts',
    },
  },
];