/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/dom/microdata.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('microdata', 'getItems' in document);
export default Modernizr.microdata;
