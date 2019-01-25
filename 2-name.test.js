const server = require('./2-name.js');

describe('server', () => {
  const options = {
    method: 'GET',
    url: '/Shreya',
  };
  it('should return "Hello <name>" string', async () => {
    const serverResponse = await server.inject(options);
    console.log(serverResponse.result);
    expect(serverResponse.result).toEqual('Hello Shreya');
  });
  it('should not return anything other than "Hello <name>" string', async () => {
    const serverResponse = await server.inject(options);
    console.log(serverResponse.result);
    expect(serverResponse.result).not.toEqual('abc');
  });
});
