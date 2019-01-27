/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/fullscreen-api.js **/
import Modernizr from '../src/Modernizr.js';
import prefixed from '../src/prefixed.js';
Modernizr.addTest('fullscreen', !!(prefixed('exitFullscreen', document, false) || prefixed('cancelFullScreen', document, false)));
export default Modernizr.fullscreen;
