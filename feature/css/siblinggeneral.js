/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/css/siblinggeneral.js **/
import Modernizr from "../../src/Modernizr.js";
import "../../src/createElement.js";
import testStyles from "../../src/testStyles.js";
Modernizr.addTest('siblinggeneral', function () {
  return testStyles('#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}', function (elem) {
    return elem.lastChild.offsetWidth === 200;
  }, 2);
});
export default Modernizr.siblinggeneral;
