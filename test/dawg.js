var test = require('tape');
var d = require('../src/dawg.js');
test('dawg works', function (t) {
    t.plan(4);
    var dawg = d.DAWG();
    // can add values
    dawg.addString('h');
    t.equals(dawg.children['h'].value, 'h');

    dawg.addString('hello');
    t.equals(dawg.lookAhead('he'), <dawgTree>);
    // can lookup based on a prefix
    dawg.addString('hello');
    t.deepEqual(dawg.lookAhead('he'), ['hello']);

    // returns multiple if multiple values available
    dawg.addString('help');
    t.deepEqual(dawg.lookAhead('hel').sort(), ['hello', 'help'].sort());

    t.equals(dawg.children.h.children.e.parent.value, 'h');


    /// 'edge' cases
      // pass empty string
});
