(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node, CommonJS-like.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.Estrada = factory();
  }
}(this, function () {

'use strict';

