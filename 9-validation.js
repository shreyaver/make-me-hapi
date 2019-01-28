const Hapi = require('hapi');
const Joi = require('joi');

const server = Hapi.Server({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});
const validateParameter = async () => {
  try {
    server.route({
      path: '/chicken/{breed?}',
      method: 'GET',
      config: {
        handler: (request, h) => `Breed: ${request.params.breed}`,
        validate: {
          params: {
            breed: Joi.string().required(),
          },
        },
      },
    });
    if (!module.parent) {
      await server.start();
    }
  } catch (errorObj) {
    console.log(errorObj);
  }
};
validateParameter();
module.exports = server;
