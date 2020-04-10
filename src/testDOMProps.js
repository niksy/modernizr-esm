/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/src/testDOMProps.js **/
import is from './is.js';
import fnBind from './fnBind.js';

function testDOMProps(props, obj, elem) {
  var item;

  for (var i in props) {
    if (props[i] in obj) {
      if (elem === false) {
        return props[i];
      }

      item = obj[props[i]];

      if (is(item, 'function')) {
        return fnBind(item, elem || obj);
      }

      return item;
    }
  }

  return false;
}

export default testDOMProps;
