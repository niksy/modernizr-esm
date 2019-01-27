/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/typed-arrays.js **/
import Modernizr from '../src/Modernizr.js';
Modernizr.addTest('typedarrays', 'ArrayBuffer' in window);
export default Modernizr.typedarrays;
