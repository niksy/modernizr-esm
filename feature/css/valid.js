/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/css/valid.js **/
import Modernizr from "../../src/Modernizr.js";
import testStyles from "../../src/testStyles.js";
import createElement from "../../src/createElement.js";
Modernizr.addTest('cssvalid', function () {
  return testStyles('#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}', function (elem) {
    var input = createElement('input');
    elem.appendChild(input);
    return input.clientWidth > 10;
  });
});
export default Modernizr.cssvalid;
