var test = require('testling');

test('json parse', function (t) {
    t.deepEqual(JSON.parse('[1,2]'), [1,2]);
    t.deepEqual(JSON.parse('[3,4]'), [3,4]);
    t.end();
});
