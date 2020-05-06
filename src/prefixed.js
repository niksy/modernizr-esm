/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/src/prefixed.js **/
import ModernizrProto from './Modernizr.js';
import testPropsAll from './testPropsAll.js';
import cssToDOM from './cssToDOM.js';
import atRule from './atRule.js';

var prefixed = ModernizrProto.prefixed = function (prop, obj, elem) {
  if (prop.indexOf('@') === 0) {
    return atRule(prop);
  }

  if (prop.indexOf('-') !== -1) {
    prop = cssToDOM(prop);
  }

  if (!obj) {
    return testPropsAll(prop, 'pfx');
  } else {
    return testPropsAll(prop, obj, elem);
  }
};

export default prefixed;
