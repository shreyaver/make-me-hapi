const Hapi = require('hapi');

const server = Hapi.Server({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});
server.route({
  path: '/{name}',
  method: 'GET',
  handler: (request, h) => `Hello ${encodeURIComponent(request.params.name)}`,
});
if (!module.parent) {
  const startListening = async () => {
    await server.start();
  };
  startListening();
}

module.exports = server;
