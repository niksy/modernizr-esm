/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/dom/mutationObserver.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('mutationobserver', !!window.MutationObserver || !!window.WebKitMutationObserver);
export default Modernizr.mutationobserver;
