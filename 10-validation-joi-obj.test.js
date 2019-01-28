const server = require('./10-validation-joi-obj');

describe('server at path "/login" with payload {isGuest: true, accessToken: <string>}', () => {
  const options = {
    method: 'POST',
    url: '/login',
    payload: {
      isGuest: true,
      accessToken: 'abcd123',
    },
  };
  it('should return status code 200', async () => {
    const serverResponse = await server.inject(options);
    expect(serverResponse.statusCode).toEqual(200);
  });
  it('should return "login successful"', async () => {
    const serverResponse = await server.inject(options);
    expect(serverResponse.result).toEqual('login successful');
  });
});
describe('server at path "/login" with payload {isGuest: true, password: <string>}', () => {
    const options = {
      method: 'POST',
      url: '/login',
      payload: {
        isGuest: true,
        password: 'abcd123',
      },
    };
    it('should return status code 200', async () => {
      const serverResponse = await server.inject(options);
      expect(serverResponse.statusCode).toEqual(200);
    });
    it('should return "login successful"', async () => {
      const serverResponse = await server.inject(options);
      expect(serverResponse.result).toEqual('login successful');
    });
  });
describe('server at path "/login" with payload {isGuest: false, username: <string>, accessToken: <string>}', () => {
    const options = {
      method: 'POST',
      url: '/login',
      payload: {
        isGuest: false,
        username: 'fge',
        accessToken: 'abcd123',
      },
    };
    it('should return status code 200', async () => {
      const serverResponse = await server.inject(options);
      expect(serverResponse.statusCode).toEqual(200);
    });
    it('should return "login successful"', async () => {
      const serverResponse = await server.inject(options);
      expect(serverResponse.result).toEqual('login successful');
    });
  });
  describe('server at path "/login" with payload {isGuest: false, username: <string>, password: <string>}', () => {
    const options = {
      method: 'POST',
      url: '/login',
      payload: {
        isGuest: false,
        username: 'fge',
        password: 'abcd123',
      },
    };
    it('should return status code 200', async () => {
      const serverResponse = await server.inject(options);
      expect(serverResponse.statusCode).toEqual(200);
    });
    it('should return "login successful"', async () => {
      const serverResponse = await server.inject(options);
      expect(serverResponse.result).toEqual('login successful');
    });
  });
describe('server at path "/login" with payload{isGuest: true, accessToken: <number>}', () => {
    const options = {
      method: 'POST',
      url: '/login',
      payload: {
        isGuest: true,
        accessToken: 123,
      },
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
  describe('server at path "/login" with payload{isGuest: true, accessToken: <string with special characters>}', () => {
    const options = {
      method: 'POST',
      url: '/login',
      payload: {
        isGuest: true,
        accessToken: '123!m',
      },
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
  describe('server at path "/login" with payload{isGuest: false, accessToken: <string>}', () => {
    const options = {
      method: 'POST',
      url: '/login',
      payload: {
        isGuest: false,
        accessToken: '123',
      },
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
  describe('server at path "/login" with payload{isGuest: false, username: <string>, password: <string>, accessToken: <string>}', () => {
    const options = {
      method: 'POST',
      url: '/login',
      payload: {
        isGuest: false,
        username: 'abc',
        password: 'ghi',
        accessToken: 'def',
      },
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
