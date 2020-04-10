/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/src/cssToDOM.js **/
function cssToDOM(name) {
  return name.replace(/([a-z])-([a-z])/g, function (str, m1, m2) {
    return m1 + m2.toUpperCase();
  }).replace(/^-/, '');
}

export default cssToDOM;
