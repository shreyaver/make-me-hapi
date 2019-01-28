// how to check served file path?
// if file is not there?
const server = require('./4-directories');
const fs = require('fs');

describe('server at path "/foo/bar/baz/file.html"', () => {
  const options = {
    method: 'GET',
    url: '/foo/bar/baz/file.html',
  };
  it('should return status code 200', async () => {
    const serverResponse = await server.inject(options);
    expect(serverResponse.statusCode).toEqual(200);
  });
  it('should serve the html file in directory "./public"', async () => {
    const filename = 'file.html';
    let fileData;
    const callback = (data) => {
      fileData = data.toString();
    };
    fs.readFile(`./public/${filename}`, (err, data) => {
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
//     <head><title>Hello Directories</title></head>
//     <body>
//         Hello Directories
//     </body>
// </html>
// `);
//   });
});
