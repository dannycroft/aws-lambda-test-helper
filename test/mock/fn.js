"use strict"; 

const https = require('https');

module.exports.foo = (event, context) => {
  const url = 'https://xkcd.com/info.0.json';
  const request = https.get(url, (response) => {
    const body = [];
    response.on('data', chunk => body.push(chunk));
    response.on('end', () => context.succeed(JSON.parse((body.join('')))));
  });
  request.on('error', err => context.fail(err));
};
