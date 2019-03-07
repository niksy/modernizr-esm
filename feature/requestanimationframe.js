/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/requestanimationframe.js **/
import Modernizr from '../src/Modernizr.js';
import prefixed from '../src/prefixed.js';

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('requestanimationframe', _isBrowser && !!prefixed('requestAnimationFrame', window), {
  aliases: ['raf']
});
export default Modernizr.requestanimationframe;
