/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/geolocation.js **/
import Modernizr from "../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('geolocation', _isBrowser && 'geolocation' in navigator);
export default Modernizr.geolocation;
