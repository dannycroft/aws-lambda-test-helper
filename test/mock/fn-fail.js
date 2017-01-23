"use strict";

const https = require('https');

module.exports.fail = (event, context) => {
  context.fail(new Error('Fail'));
};
