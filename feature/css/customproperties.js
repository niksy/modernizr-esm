/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/css/customproperties.js **/
import Modernizr from '../src/Modernizr.js';

var _isBrowser = typeof window !== "undefined";

var supportsFn = _isBrowser && (window.CSS && window.CSS.supports.bind(window.CSS) || window.supportsCSS);

Modernizr.addTest('customproperties', !!supportsFn && (supportsFn('--f:0') || supportsFn('--f', 0)));
export default Modernizr.customproperties;
