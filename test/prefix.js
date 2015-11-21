var test = require('tape');
var pre = require('../src/prefixer.js');
test('t9 numbers converted to array of word prefixes', function (t) {
    t.plan(1);
    t.deepEqual(pre.t9ToPrefixes(2), ['a', 'b', 'c']);
});
