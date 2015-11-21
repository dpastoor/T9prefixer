var test = require('tape');
var d = require('../src/dawg.js');
test('dawg works', function (t) {
    t.plan(3);
    var dawg = d.DAWG();
    // can add values
    dawg.addString('h');
    t.equals(dawg.children['h'].value, 'h');

    dawg.addString('hello');
    t.equals(dawg.lookAhead('he'), <dawgTree>);
    // can lookup based on a prefix
    dawg.addString('hello');
    t.equals(dawg.lookAhead('he').words(), ['hello']);

    // returns multiple if multiple values available
    dawg.addString('help');
    t.equals(dawg.lookAhead('he').sort(), ['hello', 'help'].sort());

    /// 'edge' cases
      // pass empty string
});
