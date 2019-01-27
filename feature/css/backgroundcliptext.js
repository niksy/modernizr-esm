/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/css/backgroundcliptext.js **/
import Modernizr from '../../src/Modernizr.js';
import testAllProps from '../../src/testAllProps.js';
Modernizr.addTest('backgroundcliptext', function () {
  return testAllProps('backgroundClip', 'text');
});
export default Modernizr.backgroundcliptext;
