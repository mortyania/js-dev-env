//this file is not transpiled so it must only use CommonJS and ES5

//requre babel to transpile before our tests are run
require('babel-register')();

//disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {}

