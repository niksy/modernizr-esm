/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/src/fnBind.js **/
function fnBind(fn, that) {
  return function () {
    return fn.apply(that, arguments);
  };
}

export default fnBind;
