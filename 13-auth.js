const Hapi = require('hapi');
const Auth = require('hapi-auth-basic');

const user = { username: 'hapi', password: 'auth' };

const validate = async (request, username, password, h) => {
  if (username === user.username && password === user.password) {
    return { isValid: true, credentials: { name: user.username } };
  }
  return { isValid: false, credentials: { name: user.username } };
};
const server = Hapi.Server({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});
const authenticate = async () => {
  try {
    await server.register(Auth);
    server.auth.strategy('simple', 'basic', { validate });
    server.auth.default('simple');

    server.route({
      method: 'GET',
      path: '/',
      handler: (request, h) => 'welcome',
    });
    if (!module.parent) {
      await server.start();
    }
  } catch (error) {
    console.log(error);
  }
};
authenticate();
module.exports = server;
