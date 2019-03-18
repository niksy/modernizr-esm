/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/es6/contains.js **/
import Modernizr from '../src/Modernizr.js';
import is from '../src/is.js';
Modernizr.addTest('contains', is(String.prototype.contains, 'function'));
export default Modernizr.contains;
