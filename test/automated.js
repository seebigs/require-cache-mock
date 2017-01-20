
require('../index.js');

var featherTest = require('feather-test');

featherTest.queue('./specs');

featherTest.run();
