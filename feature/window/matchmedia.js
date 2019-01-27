/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/window/matchmedia.js **/
import Modernizr from '../../src/Modernizr.js';
import prefixed from '../../src/prefixed.js';
Modernizr.addTest('matchmedia', !!prefixed('matchMedia', window));
export default Modernizr.matchmedia;
