const Hapi = require('hapi');

const routeConfig = {
  path: '/upload',
  method: 'POST',
  config: {
    handler: (request, h) => {
      return new Promise((resolve, reject) => {
        try {
          let body = '';
          request.payload.file.on('data', (data) => {
            body += data;
          });

          request.payload.file.on('end', () => {
            const result = {
              description: request.payload.description, // description from form
              file: {
                data: body, // content of file uploaded
                filename: request.payload.file.hapi.filename, // name of file uploaded
                headers: request.payload.file.hapi.headers, // file header provided by hapi
              },
            };
            return resolve(JSON.stringify(result));
          });
        } catch (err) {
          return reject(err);
        }
      });
    },
    payload: {
      output: 'stream',
      parse: true,
      allow: 'multipart/form-data',
    },
  },
};
const server = Hapi.Server({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});
const getUploadedFile = async () => {
  try {
    server.route(routeConfig);
    if (!module.parent) {
      await server.start();
    }
  } catch (errorObj) {
    console.log(errorObj);
  }
};
getUploadedFile();
module.exports = server;
