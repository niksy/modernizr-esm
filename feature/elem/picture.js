/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/elem/picture.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('picture', 'HTMLPictureElement' in window);
export default Modernizr.picture;
