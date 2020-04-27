/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/src/roundedEquals.js **/
function roundedEquals(a, b) {
  return a - 1 === b || a === b || a + 1 === b;
}

export default roundedEquals;
