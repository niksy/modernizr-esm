/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/src/prefixes.js **/
import ModernizrProto from './Modernizr.js';
var prefixes = true ? ' -webkit- -moz- -o- -ms- '.split(' ') : ['', ''];
ModernizrProto._prefixes = prefixes;
export default prefixes;
