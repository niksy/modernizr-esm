/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/elem/time.js **/
import Modernizr from '../../src/Modernizr.js';
import createElement from '../../src/createElement.js';
Modernizr.addTest('time', 'valueAsDate' in createElement('time'));
export default Modernizr.time;
