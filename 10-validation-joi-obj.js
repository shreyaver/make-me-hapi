const Hapi = require('hapi');
const Joi = require('joi');

const routeConfig = {
  path: '/login',
  method: 'POST',
  config: {
    handler: (request, h) => 'login successful',
    validate: {
      payload: Joi.object({
        isGuest: Joi.boolean().required(),
        username: Joi.string().when('isGuest', { is: false, then: Joi.required() }),
        accessToken: Joi.string().alphanum(),
        password: Joi.string().alphanum(),
      }).options({ allowUnknown: true })
        .without('password', 'accessToken'),
    },
  },
};
const server = Hapi.Server({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});
const validateJoiObj = async () => {
  try {
    server.route(routeConfig);
    if (!module.parent) {
      await server.start();
    }
  } catch (errorObj) {
    console.log(errorObj);
  }
};
validateJoiObj();
module.exports = server;
