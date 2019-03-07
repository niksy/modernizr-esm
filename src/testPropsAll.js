/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/src/testPropsAll.js **/
import ModernizrProto from './Modernizr.js';
import cssomPrefixes from './cssomPrefixes.js';
import is from './is.js';
import testProps from './testProps.js';
import domPrefixes from './domPrefixes.js';
import testDOMProps from './testDOMProps.js';

function testPropsAll(prop, prefixed, elem, value, skipValueTest) {
  var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
      props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

  if (is(prefixed, 'string') || is(prefixed, 'undefined')) {
    return testProps(props, prefixed, value, skipValueTest);
  } else {
    props = (prop + ' ' + domPrefixes.join(ucProp + ' ') + ucProp).split(' ');
    return testDOMProps(props, prefixed, elem);
  }
}

ModernizrProto.testAllProps = testPropsAll;
export default testPropsAll;
