const Hapi = require('hapi');
const Inert = require('inert');
const Path = require('path');

const server = Hapi.Server({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});
const inertRoute = async () => {
  try {
    await server.register(Inert);
    server.route({
      path: '/foo/bar/baz/{file*}',
      method: 'GET',
      handler: {
        directory: {
          path: Path.join(__dirname, 'public'),
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
inertRoute();
module.exports = server;
