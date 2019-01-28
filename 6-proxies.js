const Hapi = require('hapi');
const H2o2 = require('h2o2');

const server = Hapi.Server({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});
const relayRequest = async () => {
  try {
    await server.register(H2o2);
    server.route({
      method: 'GET',
      path: '/proxy',
      handler: {
        proxy: {
          host: '127.0.0.1',
          port: 7000, // 65535,
        },
      },
    });
    if (!module.parent) {
      await server.start();
    }
  } catch (errorObj) {
    console.log(errorObj.message);
  }
};
relayRequest();
module.exports = server;
