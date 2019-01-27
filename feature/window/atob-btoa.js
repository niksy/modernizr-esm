/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/window/atob-btoa.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('atobbtoa', 'atob' in window && 'btoa' in window, {
  aliases: ['atob-btoa']
});
export default Modernizr.atobbtoa;
