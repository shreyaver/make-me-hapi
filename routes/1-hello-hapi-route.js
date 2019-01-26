const route1 = {
  path: '/',
  method: 'GET',
  handler: (request, h) => 'Hello hapi',
};
const route2 = {
  path: '/{any*}',
  method: ['GET', 'POST'],
  handler: (request, h) => h.response('You have reached unexplored territory').code(404),
};
module.exports = [route1, route2];
