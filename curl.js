const request = require('request');

let catCmd = (url) => {
  request(url, function (error, response, body) {
    process.stdout.write(body);
    process.stdout.write('prompt > ');
    // request
    // .get(url)
    // .on('response', function())
  });
};

module.exports = catCmd;
