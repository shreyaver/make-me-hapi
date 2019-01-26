const server = require('./2-name.js');

describe('server', () => {
  it('should return "Hello <first path parameter>" string', async () => {
    const options = {
      method: 'GET',
      url: '/Shreya',
    };
    const serverResponse = await server.inject(options);
    console.log(serverResponse.result);
    expect(serverResponse.result).toEqual('Hello Shreya');
  });
  it('should not return anything other than "Hello <first path parameter>" string', async () => {
    const options = {
      method: 'GET',
      url: '/Shreya',
    };
    const serverResponse = await server.inject(options);
    console.log(serverResponse.result);
    expect(serverResponse.result).not.toEqual('Hello shreya');
  });
  it('should return "Hello <first path parameter>" with number', async () => {
    const options = {
      method: 'GET',
      url: '/123',
    };
    const serverResponse = await server.inject(options);
    console.log(serverResponse.result);
    expect(serverResponse.result).toEqual('Hello 123');
  });
  it('should return "Hello <first path parameter>" HTML safe string with space', async () => {
    const options = {
      method: 'GET',
      url: '/Shreya Verma',
    };
    const serverResponse = await server.inject(options);
    console.log(serverResponse.result);
    expect(serverResponse.result).toEqual('Hello Shreya%20Verma');
  });
  it('should return "Hello <first path parameter>" HTML safe string with space and numbers', async () => {
    const options = {
      method: 'GET',
      url: '/12 3',
    };
    const serverResponse = await server.inject(options);
    console.log(serverResponse.result);
    expect(serverResponse.result).toEqual('Hello 12%203');
  });
  it('should return "Hello <first path parameter>" HTML safe string with &', async () => {
    const options = {
      method: 'GET',
      url: '/12&3',
    };
    const serverResponse = await server.inject(options);
    console.log(serverResponse.result);
    expect(serverResponse.result).toEqual('Hello 12%263');
  });
});
