/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/script/async.js **/
import Modernizr from '../../src/Modernizr.js';
import createElement from '../../src/createElement.js';
Modernizr.addTest('scriptasync', 'async' in createElement('script'));
export default Modernizr.scriptasync;
