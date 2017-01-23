"use strict"; 

const path = require('path');

module.exports = (name) => {
  if (typeof (name) === 'undefined') {
    throw new Error('Invalid function name');
  }

  try {
    if (name.substr(-3) !== '.js') {
      name += '.js';
    }
    name = path.resolve(name);
  } catch (e) {
    throw new Error(`Cannot resolve given function: ${name}`);
  }
  return name;
};
