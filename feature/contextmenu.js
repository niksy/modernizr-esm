/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/contextmenu.js **/
import Modernizr from "../src/Modernizr.js";
import docElement from "../src/docElement.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('contextmenu', _isBrowser && 'contextMenu' in docElement && 'HTMLMenuItemElement' in window);
export default Modernizr.contextmenu;
