const Hapi = require('hapi');

const server = Hapi.Server({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});
const fileRoute = async () => {
  try {
    await server.register(require('inert'));
    server.route({
      path: '/',
      method: 'GET',
      handler: { file: 'index.html' },
    });
    if (!module.parent) {
      await server.start();
    }
  } catch (errorObj) {
    console.log(errorObj.message);
  }
};
fileRoute();
module.exports = server;
