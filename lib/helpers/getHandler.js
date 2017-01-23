const path = require('path');

function isFunction(handler) {
  return (handler && typeof (handler) === 'function');
}

module.exports = (filename, handler) => {
  filename = path.relative(__dirname, filename);
  const exported = require(filename);

  if (isFunction(exported[handler])) {
    return exported[handler];
  }

  const fallback = Object.keys(exported).filter(k => isFunction(exported[k]));

  if (fallback.length) {
    return exported[fallback[0]];
  }
};
