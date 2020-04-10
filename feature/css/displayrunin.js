/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/css/displayrunin.js **/
import Modernizr from "../../src/Modernizr.js";
import testAllProps from "../../src/testAllProps.js";
Modernizr.addTest('displayrunin', testAllProps('display', 'run-in'), {
  aliases: ['display-runin']
});
export default Modernizr.displayrunin;
