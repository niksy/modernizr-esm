/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/ambientlight.js **/
import Modernizr from '../src/Modernizr.js';
import hasEvent from '../src/hasEvent.js';

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('ambientlight', _isBrowser && hasEvent('devicelight', window));
export default Modernizr.ambientlight;
