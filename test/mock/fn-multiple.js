"use strict"; 

const https = require('https');

module.exports.foo = function foo(event, context) {
  context.succeed('foo');
};

module.exports.bar = function bar(event, context) {
  context.succeed('bar');
};

module.exports.baz = function baz(event, context) {
  context.succeed('baz');
};

module.exports.handler = function handler(event, context) {
  context.succeed('handler');
};
