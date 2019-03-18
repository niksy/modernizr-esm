/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/img/jpeg2000.js **/
import Modernizr, { addTest, createAsyncTestListener } from "../src/Modernizr.js";
Modernizr.addAsyncTest(function () {
  var image = new Image();

  image.onload = image.onerror = function () {
    addTest('jpeg2000', image.width === 1);
  };

  image.src = 'data:image/jp2;base64,/0//UQAyAAAAAAABAAAAAgAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAEBwEBBwEBBwEBBwEB/1IADAAAAAEAAAQEAAH/XAAEQED/ZAAlAAFDcmVhdGVkIGJ5IE9wZW5KUEVHIHZlcnNpb24gMi4wLjD/kAAKAAAAAABYAAH/UwAJAQAABAQAAf9dAAUBQED/UwAJAgAABAQAAf9dAAUCQED/UwAJAwAABAQAAf9dAAUDQED/k8+kEAGvz6QQAa/PpBABr994EAk//9k=';
});
export default createAsyncTestListener("jpeg2000");
