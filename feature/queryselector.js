/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/queryselector.js **/
import Modernizr from '../src/Modernizr.js';
Modernizr.addTest('queryselector', 'querySelector' in document && 'querySelectorAll' in document);
export default Modernizr.queryselector;
