const ShExParserCjsModule = (function () {
  const ShExUtil = require('@shexjs/util');
  return Object.assign({}, ShExUtil, {c:3});
})();

if (typeof require !== 'undefined' && typeof exports !== 'undefined')
  module.exports = ShExParserCjsModule;
