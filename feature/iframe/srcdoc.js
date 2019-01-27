/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/iframe/srcdoc.js **/
import Modernizr from '../../src/Modernizr.js';
import createElement from '../../src/createElement.js';
Modernizr.addTest('srcdoc', 'srcdoc' in createElement('iframe'));
export default Modernizr.srcdoc;
