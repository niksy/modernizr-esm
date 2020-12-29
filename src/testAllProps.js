/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/src/testAllProps.js **/
import ModernizrProto from './Modernizr.js';
import testPropsAll from './testPropsAll.js';

function testAllProps(prop, value, skipValueTest) {
  return testPropsAll(prop, undefined, undefined, value, skipValueTest);
}

ModernizrProto.testAllProps = testAllProps;
export default testAllProps;
