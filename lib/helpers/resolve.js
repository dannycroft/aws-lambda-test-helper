const path = require('path');

module.exports = (file) => {
  try {
    if (file.substr(-5) !== '.json') {
      file += '.json';
    }
    file = path.resolve(file);
    file = require.resolve(file);
    file = require(file);

    if (typeof(file) === 'string') {
      file = JSON.parse(file);
    }
    return file;
  } catch (e) {}
  return undefined;
};
