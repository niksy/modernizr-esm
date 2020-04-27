/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/forms/fileinput.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
Modernizr.addTest('fileinput', function () {
  var ua = navigator.userAgent;

  if (ua.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/) || ua.match(/\swv\).+(chrome)\/([\w\.]+)/i)) {
    return false;
  }

  var elem = createElement('input');
  elem.type = 'file';
  return !elem.disabled;
});
export default Modernizr.fileinput;
