const server = require('./1-hello-hapi.js');

describe('server at path "/"', () => {
  const options = {
    method: 'GET',
    url: '/',
  };
  it('should return "Hello hapi" string', async () => {
    const serverResponse = await server.inject(options);
    expect(serverResponse.result).toEqual('Hello hapi');
  });
  it('should not return anything other than "Hello hapi" string', async () => {
    const serverResponse = await server.inject(options);
    expect(serverResponse.result).not.toEqual('hello hapi');
  });
  it('should return status code 200 for "OK"', async () => {
    const serverResponse = await server.inject(options);
    expect(serverResponse.statusCode).toEqual(200);
  });
});
describe('server at path other than "/"', () => {
  it('should return "You have reached unexplored territory" string for "/<string>"', async () => {
    const options = {
      method: 'GET',
      url: '/abc',
    };
    const serverResponse = await server.inject(options);
    expect(serverResponse.result).toEqual('You have reached unexplored territory');
  });
  it('should return "You have reached unexplored territory" string for "/ <string>"', async () => {
    const options = {
      method: 'GET',
      url: '/ abc',
    };
    const serverResponse = await server.inject(options);
    expect(serverResponse.result).toEqual('You have reached unexplored territory');
  });
  it('should return "You have reached unexplored territory" string for "/<string>/<string>"', async () => {
    const options = {
      method: 'GET',
      url: '/abc/def',
    };
    const serverResponse = await server.inject(options);
    expect(serverResponse.result).toEqual('You have reached unexplored territory');
  });
  it('should return status code 404 for "Not Found"', async () => {
    const options = {
      method: 'GET',
      url: '/abc',
    };
    const serverResponse = await server.inject(options);
    expect(serverResponse.statusCode).toEqual(404);
  });
});
