/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/src/cssomPrefixes.js **/
import ModernizrProto from './Modernizr.js';
import omPrefixes from './omPrefixes.js';
var cssomPrefixes = true ? omPrefixes.split(' ') : [];
ModernizrProto._cssomPrefixes = cssomPrefixes;
export default cssomPrefixes;
