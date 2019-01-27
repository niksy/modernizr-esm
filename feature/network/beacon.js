/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/network/beacon.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('beacon', 'sendBeacon' in navigator);
export default Modernizr.beacon;
