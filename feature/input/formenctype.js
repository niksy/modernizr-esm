/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/input/formenctype.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
Modernizr.addTest('inputformenctype', !!('formEnctype' in createElement('input')), {
  aliases: ['input-formenctype']
});
export default Modernizr.inputformenctype;
