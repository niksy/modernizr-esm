/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/cookies.js **/
import Modernizr from "../src/Modernizr.js";
Modernizr.addTest('cookies', function () {
  try {
    document.cookie = 'cookietest=1';
    var ret = document.cookie.indexOf('cookietest=') !== -1;
    document.cookie = 'cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT';
    return ret;
  } catch (e) {
    return false;
  }
});
export default Modernizr.cookies;
