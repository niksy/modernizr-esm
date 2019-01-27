/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/contextmenu.js **/
import Modernizr from '../src/Modernizr.js';
import docElement from '../src/docElement.js';
Modernizr.addTest('contextmenu', 'contextMenu' in docElement && 'HTMLMenuItemElement' in window);
export default Modernizr.contextmenu;
