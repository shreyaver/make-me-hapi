const Hapi = require('hapi');
const routes = require('./routes/1-hello-hapi-route.js');

const server = Hapi.Server({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});
server.route(routes);
if (!module.parent) {
  const startListening = async () => {
    await server.start();
    console.log(server.info);
    console.log('Server running at:', server.info.uri);
  };
  startListening();
}

module.exports = server;
