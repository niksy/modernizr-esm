/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/battery/lowbattery.js **/
import Modernizr from '../../src/Modernizr.js';
import prefixed from '../../src/prefixed.js';
Modernizr.addTest('lowbattery', function () {
  var minLevel = 0.2;
  var battery = prefixed('battery', navigator);
  return !!(battery && !battery.charging && battery.level <= minLevel);
});
export default Modernizr.lowbattery;
