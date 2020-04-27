/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/forms/requestautocomplete.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
import prefixed from "../../src/prefixed.js";
Modernizr.addTest('requestautocomplete', !!prefixed('requestAutocomplete', createElement('form')));
export default Modernizr.requestautocomplete;
