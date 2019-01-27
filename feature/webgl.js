/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/webgl.js **/
import Modernizr from '../src/Modernizr.js';
import createElement from '../src/createElement.js';
Modernizr.addTest('webgl', function () {
  var canvas = createElement('canvas');
  var supports = 'probablySupportsContext' in canvas ? 'probablySupportsContext' : 'supportsContext';

  if (supports in canvas) {
    return canvas[supports]('webgl') || canvas[supports]('experimental-webgl');
  }

  return 'WebGLRenderingContext' in window;
});
export default Modernizr.webgl;
