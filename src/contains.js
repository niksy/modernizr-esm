/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/src/contains.js **/
function contains(str, substr) {
  return !!~('' + str).indexOf(substr);
}

export default contains;
