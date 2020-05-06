/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/src/computedStyle.js **/
function computedStyle(elem, pseudo, prop) {
  var result;

  if ('getComputedStyle' in window) {
    result = getComputedStyle.call(window, elem, pseudo);
    var console = window.console;

    if (result !== null) {
      if (prop) {
        result = result.getPropertyValue(prop);
      }
    } else {
      if (console) {
        var method = console.error ? 'error' : 'log';
        console[method].call(console, 'getComputedStyle returning null, its possible modernizr test results are inaccurate');
      }
    }
  } else {
    result = !pseudo && elem.currentStyle && elem.currentStyle[prop];
  }

  return result;
}

export default computedStyle;
