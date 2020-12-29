/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/dom/intersection-observer.js **/
import Modernizr from "../../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('intersectionobserver', _isBrowser && 'IntersectionObserver' in window);
export default Modernizr.intersectionobserver;
