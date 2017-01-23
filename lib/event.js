"use strict"; 

const resolve = require('./helpers/resolve');

module.exports = (e) => {
  if (typeof (e) !== 'undefined') {
    return resolve(e);
  }
  return {};
};
