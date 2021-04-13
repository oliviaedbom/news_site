const Hapi = require('@hapi/hapi');
const vision = require('vision');
const handlebars = require('handlebars');
const routes = require('./src/routes');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  await server.register({
    plugin: vision, // This will render HTML templates
  });

  // configure HTML template support
  server.views({
    engines: {
      html: handlebars,
    },
    path: `${__dirname}/src/views`,
    layout: 'layout',
  });

  server.route(routes);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();