/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/es6/string.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('es6string', !!(String.fromCodePoint && String.raw && String.prototype.codePointAt && String.prototype.repeat && String.prototype.startsWith && String.prototype.endsWith && String.prototype.includes));
export default Modernizr.es6string;
