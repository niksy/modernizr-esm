/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/vibration.js **/
import Modernizr from '../src/Modernizr.js';
import prefixed from '../src/prefixed.js';
Modernizr.addTest('vibrate', !!prefixed('vibrate', navigator));
export default Modernizr.vibrate;
