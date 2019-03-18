/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/webgl.js **/
import Modernizr from '../src/Modernizr.js';
Modernizr.addTest('webgl', function () {
  return 'WebGLRenderingContext' in window;
});
export default Modernizr.webgl;
