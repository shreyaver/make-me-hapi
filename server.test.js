const server = require('./server.js');

describe('server', () => {
  const options = {
    method: 'GET',
    url: '/ping',
  };
  it('should return pong on receiving "ping"', async () => {
    const serverResponse = await server.inject(options);
    expect(serverResponse.result).toEqual('pong');
  });
  it('should not return anything other than pong on receiving "ping"', async () => {
    const serverResponse = await server.inject(options);
    expect(serverResponse.result).not.toEqual('Pong');
  });
});
