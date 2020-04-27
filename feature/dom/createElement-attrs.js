/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/dom/createElement-attrs.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
Modernizr.addTest('createelementattrs', function () {
  try {
    return createElement('<input name="test" />').getAttribute('name') === 'test';
  } catch (e) {
    return false;
  }
}, {
  aliases: ['createelement-attrs']
});
export default Modernizr.createelementattrs;
