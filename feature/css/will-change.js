/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/css/will-change.js **/
import Modernizr from '../../src/Modernizr.js';
import docElement from '../../src/docElement.js';
Modernizr.addTest('willchange', 'willChange' in docElement.style);
export default Modernizr.willchange;
