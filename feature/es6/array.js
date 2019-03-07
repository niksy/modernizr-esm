/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/es6/array.js **/
import Modernizr from '../src/Modernizr.js';
Modernizr.addTest('es6array', !!(Array.prototype && Array.prototype.copyWithin && Array.prototype.fill && Array.prototype.find && Array.prototype.findIndex && Array.prototype.keys && Array.prototype.entries && Array.prototype.values && Array.from && Array.of));
export default Modernizr.es6array;
