// how to check served file path?
// if file is not there?

const server = require('./3-static-html-file.js');
const fs = require('fs');

describe('server at path /', () => {
  const options = {
    method: 'GET',
    url: '/',
  };
  it('should return status code 200', async () => {
    const serverResponse = await server.inject(options);
    expect(serverResponse.statusCode).toEqual(200);
  });
  it('should serve the html file', async () => {
    const filename = 'index.html';
    let fileData;
    const callback = (data) => {
      fileData = data.toString();
    };
    fs.readFile(`${filename}`, (err, data) => {
      if (err) {
        return console.log(err);
      }
      callback(data);
    });
    const response = await server.inject(options);
    console.log(response.result);
    expect(response.result).toEqual(fileData);
  });
//   it('should return html file', async () => {
//     const serverResponse = await server.inject(options);
//     expect(serverResponse.result).toEqual(`<html>
//     <head><title>Hello Handling</title></head>
//     <body>
//         Hello Handling
//     </body>
// </html>`);
//   });
});
