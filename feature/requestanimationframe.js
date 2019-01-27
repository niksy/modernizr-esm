/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/requestanimationframe.js **/
import Modernizr from '../src/Modernizr.js';
import prefixed from '../src/prefixed.js';
Modernizr.addTest('requestanimationframe', !!prefixed('requestAnimationFrame', window), {
  aliases: ['raf']
});
export default Modernizr.requestanimationframe;
