/**
 * Requiring this file will allow you to mock modules anywhere using
 *  require.cache.mock
 */

var mockRequire = require('mock-require');
var Module = require('module');

var old_compile = Module.prototype._compile;
Module.prototype._compile = function () {
    this.constructor._cache.mock = mockRequire;
    return old_compile.apply(this, arguments);
};
