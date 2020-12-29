/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/css/fontface.js **/
import Modernizr from "../../src/Modernizr.js";
import testStyles from "../../src/testStyles.js";

var _isBrowser = typeof window !== "undefined";

var fontface = _isBrowser && function () {
  var unsupportedUserAgent = _isBrowser && function () {
    var ua = navigator.userAgent;
    var webos = ua.match(/w(eb)?osbrowser/gi);
    var wppre8 = ua.match(/windows phone/gi) && ua.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9;
    return webos || wppre8;
  }();

  if (unsupportedUserAgent) {
    Modernizr.addTest('fontface', false);
  } else {
    testStyles('@font-face {font-family:"font";src:url("https://")}', function (node, rule) {
      var style = document.getElementById('smodernizr');
      var sheet = style.sheet || style.styleSheet;
      var cssText = sheet ? sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '' : '';
      var bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
      Modernizr.addTest('fontface', bool);
    });
  }
}();

export default Modernizr.fontface;
