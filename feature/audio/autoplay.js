/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.4/feature-detects/audio/autoplay.js **/
import Modernizr, { addTest, createAsyncTestListener } from "../../src/Modernizr.js";
import docElement from "../../src/docElement.js";
import createElement from "../../src/createElement.js";
import "../audio.js";
Modernizr.addAsyncTest(function () {
  var timeout;
  var waitTime = 200;
  var retries = 5;
  var currentTry = 0;
  var elem = createElement('audio');
  var elemStyle = elem.style;

  function testAutoplay(arg) {
    currentTry++;
    clearTimeout(timeout);
    var result = arg && arg.type === 'playing' || elem.currentTime !== 0;

    if (!result && currentTry < retries) {
      timeout = setTimeout(testAutoplay, waitTime);
      return;
    }

    elem.removeEventListener('playing', testAutoplay, false);
    addTest('audioautoplay', result);

    if (elem.parentNode) {
      elem.parentNode.removeChild(elem);
    }
  }

  if (!Modernizr.audio || !('autoplay' in elem)) {
    addTest('audioautoplay', false);
    return;
  }

  elemStyle.position = 'absolute';
  elemStyle.height = 0;
  elemStyle.width = 0;

  try {
    if (Modernizr.audio.mp3) {
      elem.src = 'data:audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq';
    } else if (Modernizr.audio.wav) {
      elem.src = 'data:audio/wav;base64,UklGRjQAAABXQVZFZm10IBAAAAABAAEAEAAAABAAAAABAAgAZGF0YRAAAAB/f39/f39/f39/f39/f39/';
    } else {
      addTest('audioautoplay', false);
      return;
    }
  } catch (e) {
    addTest('audioautoplay', false);
    return;
  }

  elem.setAttribute('autoplay', '');
  elemStyle.cssText = 'display:none';
  docElement.appendChild(elem);
  setTimeout(function () {
    elem.addEventListener('playing', testAutoplay, false);
    timeout = setTimeout(testAutoplay, waitTime);
  }, 0);
});
export default createAsyncTestListener("audioautoplay");
