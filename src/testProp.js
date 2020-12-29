/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/src/testProp.js **/
import ModernizrProto from './Modernizr.js';
import testProps from './testProps.js';

var testProp = ModernizrProto.testProp = function (prop, value, useValue) {
  return testProps([prop], undefined, value, useValue);
};

export default testProp;
