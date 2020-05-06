/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/src/testXhrType.js **/
var testXhrType = function (type) {
  if (typeof XMLHttpRequest === 'undefined') {
    return false;
  }

  var xhr = new XMLHttpRequest();
  xhr.open('get', '/', true);

  try {
    xhr.responseType = type;
  } catch (error) {
    return false;
  }

  return 'response' in xhr && xhr.responseType === type;
};

export default testXhrType;
