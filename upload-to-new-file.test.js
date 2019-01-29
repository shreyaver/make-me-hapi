const FormData = require('form-data');
const fs = require('fs');
const streamToPromise = require('stream-to-promise');
const server = require('./upload-to-new-file');

describe('server at path "/login" with payload {isGuest: true, accessToken: <string>}', () => {
  it('should return "login successful"', async () => {
    const fileStream = fs.createReadStream('fileToUpload.txt');
    const form = new FormData();
    form.append('description', 'This file will be uploaded');
    form.append('file', fileStream);
    let options = {};
    await streamToPromise(form).then((payloadF) => {
      options = {
        method: 'POST',
        url: '/upload',
        payload: payloadF,
        headers: form.getHeaders(),
      };
    });
    if (!fs.existsSync('./upload destination/newfile.txt')) {
      const serverResponse = await server.inject(options);
      console.log(serverResponse.result);
      expect(fs.existsSync('./upload destination/newfile.txt')).toEqual(true);
    //   expect(serverResponse.result).toEqual(JSON.stringify({
    //     description: 'This file will be uploaded',
    //     file: {
    //       data: 'a\nb\nc',
    //       filename: 'fileToUpload.txt',
    //       headers: {
    //         'content-disposition': 'form-data; name="file"; filename="fileToUpload.txt"',
    //         'content-type': 'text/plain',
    //       },
    //     },
    //   }));
    }
  });
});
