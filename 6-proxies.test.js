const server = require('./6-proxies.js');

describe('server at path "/proxy"', () => {
  const options = {
    method: 'GET',
    url: '/proxy',
  };
  it('should return "You have reached unexplored territory" string', async () => {
    const serverResponse = await server.inject(options);
    expect(serverResponse.result).toEqual('You have reached unexplored territory');
  });
  it('should not return anything other than "You have reached unexplored territory" string', async () => {
    const serverResponse = await server.inject(options);
    expect(serverResponse.result).not.toEqual('you have reached unexplored territory');
  });
});
