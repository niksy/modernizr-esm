/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/dom/classlist.js **/
import Modernizr from "../../src/Modernizr.js";
import docElement from "../../src/docElement.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('classlist', _isBrowser && 'classList' in docElement);
export default Modernizr.classlist;
