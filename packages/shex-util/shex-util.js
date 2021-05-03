// **ShExUtil** provides ShEx utility functions

const ShExUtilCjsModule = (function () {
  return {a:1, b:2};
})();

if (typeof require !== 'undefined' && typeof exports !== 'undefined')
  module.exports = ShExUtilCjsModule; // node environment
