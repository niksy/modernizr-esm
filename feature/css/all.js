/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/css/all.js **/
import Modernizr from '../../src/Modernizr.js';
import docElement from '../../src/docElement.js';
Modernizr.addTest('cssall', 'all' in docElement.style);
export default Modernizr.cssall;
