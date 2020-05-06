/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/src/domPrefixes.js **/
import ModernizrProto from './Modernizr.js';
import omPrefixes from './omPrefixes.js';
var domPrefixes = true ? omPrefixes.toLowerCase().split(' ') : [];
ModernizrProto._domPrefixes = domPrefixes;
export default domPrefixes;
