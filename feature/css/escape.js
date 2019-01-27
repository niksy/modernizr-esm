/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/css/escape.js **/
import Modernizr from '../../src/Modernizr.js';
var CSS = window.CSS;
Modernizr.addTest('cssescape', CSS ? typeof CSS.escape == 'function' : false);
export default Modernizr.cssescape;
