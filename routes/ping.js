const ping = {
  path: '/ping',
  method: 'GET',
  handler: (request, h) => 'pong',
};
const invalidPathRoute = {
  path: '/*',
  method: 'GET',
  handler: (request, h) => 'Invalid path',
};
module.exports = { ping, invalidPathRoute };
