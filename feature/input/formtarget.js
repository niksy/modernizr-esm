/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/input/formtarget.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
Modernizr.addTest('inputformtarget', !!('formTarget' in createElement('input')), {
  aliases: ['input-formtarget']
});
export default Modernizr.inputformtarget;
