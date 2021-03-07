const request = require("request");

let catCmd = (url, done) => {
  request(url, function (error, response, body) {
    done(body);
  });
};

module.exports = catCmd;
