/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/src/nativeTestProps.js **/
import injectElementWithStyles from './injectElementWithStyles.js';
import domToCSS from './domToCSS.js';
import computedStyle from './computedStyle.js';

function nativeTestProps(props, value) {
  var i = props.length;

  if ('CSS' in window && 'supports' in window.CSS) {
    while (i--) {
      if (window.CSS.supports(domToCSS(props[i]), value)) {
        return true;
      }
    }

    return false;
  } else if ('CSSSupportsRule' in window) {
    var conditionText = [];

    while (i--) {
      conditionText.push('(' + domToCSS(props[i]) + ':' + value + ')');
    }

    conditionText = conditionText.join(' or ');
    return injectElementWithStyles('@supports (' + conditionText + ') { #modernizr { position: absolute; } }', function (node) {
      return computedStyle(node, null, 'position') === 'absolute';
    });
  }

  return undefined;
}

export default nativeTestProps;
