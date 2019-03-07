/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/src/domToCSS.js **/
function domToCSS(name) {
  return name.replace(/([A-Z])/g, function (str, m1) {
    return '-' + m1.toLowerCase();
  }).replace(/^ms-/, '-ms-');
}

export default domToCSS;
