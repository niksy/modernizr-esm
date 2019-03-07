/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/battery.js **/
import Modernizr from '../src/Modernizr.js';
import prefixed from '../src/prefixed.js';

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('batteryapi', _isBrowser && !!prefixed('battery', navigator), {
  aliases: ['battery-api']
});
export default Modernizr.batteryapi;
