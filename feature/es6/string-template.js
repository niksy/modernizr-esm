/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/es6/string-template.js **/
import Modernizr from "../../src/Modernizr.js";
Modernizr.addTest('stringtemplate', function () {
  try {
    return eval('(function(){var a=1; return `-${a}-`;})()') === '-1-';
  } catch (e) {
    return false;
  }
});
export default Modernizr.stringtemplate;
