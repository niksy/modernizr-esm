/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/css/textdecoration.js **/
import Modernizr from '../src/Modernizr.js';
import testAllProps from '../src/testAllProps.js';

var _isBrowser = typeof window !== "undefined";

_isBrowser && function () {
  Modernizr.addTest('textdecoration', function () {
    var bool = false;
    var test = testAllProps('textDecoration');

    try {
      bool = !!test;

      if (bool) {
        bool = new Boolean(bool);
      }
    } catch (e) {}

    return bool;
  });
  var props = ['Line', 'Style', 'Color', 'Skip', 'SkipInk'];
  var name, test;

  for (var i = 0; i < props.length; i++) {
    name = props[i].toLowerCase();
    test = testAllProps('textDecoration' + props[i]);
    Modernizr.addTest('textdecoration.' + name, test);
  }
}();
export default Modernizr.textdecoration;
