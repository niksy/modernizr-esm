/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/src/testProps.js **/
import contains from './contains.js';
import mStyle from './mStyle.js';
import createElement from './createElement.js';
import nativeTestProps from './nativeTestProps.js';
import is from './is.js';
import cssToDOM from './cssToDOM.js';

function testProps(props, prefixed, value, skipValueTest) {
  skipValueTest = is(skipValueTest, 'undefined') ? false : skipValueTest;

  if (!is(value, 'undefined')) {
    var result = nativeTestProps(props, value);

    if (!is(result, 'undefined')) {
      return result;
    }
  }

  var afterInit, i, propsLength, prop, before;
  var elems = ['modernizr', 'tspan', 'samp'];

  while (!mStyle.style && elems.length) {
    afterInit = true;
    mStyle.modElem = createElement(elems.shift());
    mStyle.style = mStyle.modElem.style;
  }

  function cleanElems() {
    if (afterInit) {
      delete mStyle.style;
      delete mStyle.modElem;
    }
  }

  propsLength = props.length;

  for (i = 0; i < propsLength; i++) {
    prop = props[i];
    before = mStyle.style[prop];

    if (contains(prop, '-')) {
      prop = cssToDOM(prop);
    }

    if (mStyle.style[prop] !== undefined) {
      if (!skipValueTest && !is(value, 'undefined')) {
        try {
          mStyle.style[prop] = value;
        } catch (e) {}

        if (mStyle.style[prop] !== before) {
          cleanElems();
          return prefixed === 'pfx' ? prop : true;
        }
      } else {
        cleanElems();
        return prefixed === 'pfx' ? prop : true;
      }
    }
  }

  cleanElems();
  return false;
}

export default testProps;
