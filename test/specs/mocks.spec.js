
require.cache.mock('../fixture/two.js', { type: 'mocked' });
var one = require('../fixture/one.js');

describe('require-cache-mock', function () {

    describe('mocks nested requires', function (expect) {
        expect(one.twoType).toBe('mocked');
    });

    describe('stops mocking when told to', function (expect) {
        require.cache.mock.stopAll();
        one = require.cache.mock.reRequire('../fixture/one.js');
        expect(one.twoType).toBe('real');
    });

});
