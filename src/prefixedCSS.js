/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/src/prefixedCSS.js **/
import ModernizrProto from './Modernizr.js';
import prefixed from './prefixed.js';
import domToCSS from './domToCSS.js';

var prefixedCSS = ModernizrProto.prefixedCSS = function (prop) {
  var prefixedProp = prefixed(prop);
  return prefixedProp && domToCSS(prefixedProp);
};

export default prefixedCSS;
