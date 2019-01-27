/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/css/columns.js **/
import Modernizr from '../../src/Modernizr.js';
import testAllProps from '../../src/testAllProps.js';

(function () {
  Modernizr.addTest('csscolumns', function () {
    var bool = false;
    var test = testAllProps('columnCount');

    try {
      bool = !!test;

      if (bool) {
        bool = new Boolean(bool);
      }
    } catch (e) {}

    return bool;
  });
  var props = ['Width', 'Span', 'Fill', 'Gap', 'Rule', 'RuleColor', 'RuleStyle', 'RuleWidth', 'BreakBefore', 'BreakAfter', 'BreakInside'];
  var name, test;

  for (var i = 0; i < props.length; i++) {
    name = props[i].toLowerCase();
    test = testAllProps('column' + props[i]);

    if (name === 'breakbefore' || name === 'breakafter' || name == 'breakinside') {
      test = test || testAllProps(props[i]);
    }

    Modernizr.addTest('csscolumns.' + name, test);
  }
})();

export default Modernizr.csscolumns;
