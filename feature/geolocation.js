/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/geolocation.js **/
import Modernizr from '../src/Modernizr.js';
Modernizr.addTest('geolocation', 'geolocation' in navigator);
export default Modernizr.geolocation;
