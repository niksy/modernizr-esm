/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/elem/picture.js **/
import Modernizr from "../../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('picture', _isBrowser && 'HTMLPictureElement' in window);
export default Modernizr.picture;
