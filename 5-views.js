const Path = require('path');
const Hapi = require('hapi');
const Vision = require('vision');
const Handlebars = require('handlebars');

const server = Hapi.Server({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});
const useTemplate = async () => {
  try {
    await server.register(Vision);
    server.views({
      engines: {
        html: Handlebars,
      },
      path: Path.join(__dirname, 'templates'),
    });
    server.route({
      method: 'GET',
      path: '/',
      handler: { view: 'index.html' },
    });
    if (!module.parent) {
      await server.start();
    }
  } catch (errorObj) {
    console.log(errorObj.message);
  }
};
useTemplate();
module.exports = server;
