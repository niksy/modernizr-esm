/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/window/atob-btoa.js **/
import Modernizr from '../../src/Modernizr.js';

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('atobbtoa', _isBrowser && 'atob' in window && 'btoa' in window, {
  aliases: ['atob-btoa']
});
export default Modernizr.atobbtoa;
