/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/gamepad.js **/
import Modernizr from '../src/Modernizr.js';
import prefixed from '../src/prefixed.js';
Modernizr.addTest('gamepads', !!prefixed('getGamepads', navigator));
export default Modernizr.gamepads;
