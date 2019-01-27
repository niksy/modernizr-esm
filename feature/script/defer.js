/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/script/defer.js **/
import Modernizr from '../../src/Modernizr.js';
import createElement from '../../src/createElement.js';
Modernizr.addTest('scriptdefer', 'defer' in createElement('script'));
export default Modernizr.scriptdefer;
