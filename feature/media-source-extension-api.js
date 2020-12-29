/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/media-source-extension-api.js **/
import Modernizr from "../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('mediasource', _isBrowser && 'MediaSource' in window);
export default Modernizr.mediasource;
