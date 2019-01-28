const server = require('./9-validation');

describe('server at path "/chicken/<string>"', () => {
  const options = {
    method: 'GET',
    url: '/chicken/abc',
  };
  it('should return status code 200', async () => {
    const serverResponse = await server.inject(options);
    expect(serverResponse.statusCode).toEqual(200);
  });
  it('should return "Breed: <string>"', async () => {
    const serverResponse = await server.inject(options);
    expect(serverResponse.result).toEqual('Breed: abc');
  });
});
describe('server at path "/chicken/"', () => {
  const options = {
    method: 'GET',
    url: '/chicken/',
  };
  it('should return status code 400', async () => {
    const serverResponse = await server.inject(options);
    expect(serverResponse.statusCode).toEqual(400);
  });
  it('should return "Bad Request" error', async () => {
    const serverResponse = await server.inject(options);
    expect(serverResponse.result.error).toEqual('Bad Request');
  });
});
