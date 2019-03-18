/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/webgl/extensions.js **/
import Modernizr from '../src/Modernizr.js';
import createElement from '../src/createElement.js';
import './webgl.js';
Modernizr.addAsyncTest(function () {
  Modernizr.webglextensions = false;

  if (!Modernizr.webgl) {
    return;
  }

  var canvas;
  var ctx;
  var exts;

  try {
    canvas = createElement('canvas');
    ctx = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    exts = ctx.getSupportedExtensions();
  } catch (e) {
    return;
  }

  if (ctx !== undefined) {
    Modernizr.webglextensions = new Boolean(true);
  }

  for (var i = -1, len = exts.length; ++i < len;) {
    Modernizr.webglextensions[exts[i]] = true;
  }

  canvas = undefined;
});
