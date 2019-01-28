const fs = require('fs');
const server = require('./5-views');

describe('server at path "/?name=<string>"', () => {
  const options = {
    method: 'GET',
    url: '/?name=Shreya',
  };
  const filename = 'index.html';
  let fileData;
  const callback = (data) => {
    fileData = data.toString().replace(/{{query.name}}/g, 'Shreya');
  };
  fs.readFile(`./templates/${filename}`, (err, data) => {
    if (err) {
      return console.log(err);
    }
    callback(data);
  });
  it('should return status code 200', async () => {
    const serverResponse = await server.inject(options);
    expect(serverResponse.statusCode).toEqual(200);
  });
  it('should serve the template file with name query value <string>', async () => {
    const response = await server.inject(options);
    expect(response.result).toEqual(fileData);
  });
});
describe('server at path "/?name="', () => {
  const options = {
    method: 'GET',
    url: '/?name=',
  };
  const filename = 'index.html';
  let fileData;
  const callback = (data) => {
    fileData = data.toString().replace(/{{query.name}}/g, 'Shreya!');
  };
  fs.readFile(`./templates/${filename}`, (err, data) => {
    if (err) {
      return console.log(err);
    }
    callback(data);
  });
  it('should return status code 200', async () => {
    const serverResponse = await server.inject(options);
    expect(serverResponse.statusCode).toEqual(200);
  });
  it('should serve the template file with empty name query value', async () => {
    const response = await server.inject(options);
    expect(response.result).toEqual(fileData);
  });
});
