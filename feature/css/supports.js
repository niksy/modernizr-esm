/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/css/supports.js **/
import Modernizr from '../../src/Modernizr.js';
var newSyntax = 'CSS' in window && 'supports' in window.CSS;
var oldSyntax = 'supportsCSS' in window;
Modernizr.addTest('supports', newSyntax || oldSyntax);
export default Modernizr.supports;
