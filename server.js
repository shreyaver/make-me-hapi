const Hapi = require('hapi');
const routePing = require('./routes/ping.js');

const server = Hapi.Server({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});
server.route(routePing.ping);
server.route(routePing.invalidPathRoute);
if (!module.parent) {
  const startListening = async () => {
    await server.start();
  };
  startListening();
}

module.exports = server;
