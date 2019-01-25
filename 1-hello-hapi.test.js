const server = require('./1-hello-hapi.js');

describe('server', () => {
  const options = {
    method: 'GET',
    url: '/',
  };
  it('should return hello hapi string', async () => {
    const serverResponse = await server.inject(options);
    expect(serverResponse.result).toEqual('Hello hapi');
  });
  it('should return hello hapi string', async () => {
    const serverResponse = await server.inject(options);
    expect(serverResponse.result).not.toEqual('abc');
  });
});
