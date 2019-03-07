/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/css/objectfit.js **/
import Modernizr from '../../src/Modernizr.js';
import prefixed from '../../src/prefixed.js';
Modernizr.addTest('objectfit', !!prefixed('objectFit'), {
  aliases: ['object-fit']
});
export default Modernizr.objectfit;
