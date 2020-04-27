/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/es7/rest-destructuring.js **/
import Modernizr from "../../src/Modernizr.js";
Modernizr.addTest('restdestructuringarray', function () {
  try {
    eval('var [...rest]=[1]');
  } catch (e) {
    return false;
  }

  return true;
});
Modernizr.addTest('restdestructuringobject', function () {
  try {
    eval('var {...rest}={a:1}');
  } catch (e) {
    return false;
  }

  return true;
});
export var restdestructuringarray = Modernizr.restdestructuringarray;
export var restdestructuringobject = Modernizr.restdestructuringobject;
