var test = require('tape');
var d = require('../src/dawg.js');
test('dawg works', function (t) {
    t.plan(1);
    var dawg = d.DAWG();
    dawg.addString('h');
    t.equals(dawg.children['h'].value, 'h');
});
