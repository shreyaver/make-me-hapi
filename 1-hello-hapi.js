const Hapi = require('hapi');

const server = Hapi.Server({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});
server.route({
  path: '/',
  method: 'GET',
  handler: (request, h) => 'Hello hapi',
});
if (!module.parent) {
  const startListening = async () => {
    await server.start();
    console.log('Server running at:', server.info.uri);
  };
  startListening();
}

module.exports = server;
