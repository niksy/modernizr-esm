/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/url/parser.js **/
import Modernizr from "../../src/Modernizr.js";
Modernizr.addTest('urlparser', function () {
  var url;

  try {
    url = new URL('http://modernizr.com/');
    return url.href === 'http://modernizr.com/';
  } catch (e) {
    return false;
  }
});
export default Modernizr.urlparser;
