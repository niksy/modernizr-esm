/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/dom/documentfragment.js **/
import Modernizr from "../../src/Modernizr.js";
import docElement from "../../src/docElement.js";
Modernizr.addTest('documentfragment', function () {
  return 'createDocumentFragment' in document && 'appendChild' in docElement;
});
export default Modernizr.documentfragment;
