/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/dom/classlist.js **/
import Modernizr from '../../src/Modernizr.js';
import docElement from '../../src/docElement.js';
Modernizr.addTest('classlist', 'classList' in docElement);
export default Modernizr.classlist;
