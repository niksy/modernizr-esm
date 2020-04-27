/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/dom/dataset.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
Modernizr.addTest('dataset', function () {
  var n = createElement('div');
  n.setAttribute('data-a-b', 'c');
  return !!(n.dataset && n.dataset.aB === 'c');
});
export default Modernizr.dataset;
