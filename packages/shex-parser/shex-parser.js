const ShExParserCjsModule = (function () {
  const ShExUtil = require('@shexjs/util');
  return {
    read: (s) => Object.assign({}, ShExUtil, JSON.parse(s)),
    write: (o) => JSON.stringify(o)
  };
})();

if (typeof require !== 'undefined' && typeof exports !== 'undefined')
  module.exports = ShExParserCjsModule;
