/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/feature-detects/flash.js **/
import createElement from '../src/createElement.js';
import docElement from '../src/docElement.js';
import Modernizr, { addTest, createAsyncTestListener } from "../src/Modernizr.js";
import getBody from '../src/getBody.js';
import isSVG from '../src/isSVG.js';
Modernizr.addAsyncTest(function () {
  var attachBody = function (body) {
    if (!docElement.contains(body)) {
      docElement.appendChild(body);
    }
  };

  var removeFakeBody = function (body) {
    if (body.fake && body.parentNode) {
      body.parentNode.removeChild(body);
    }
  };

  var runTest = function (result, embed) {
    var bool = !!result;

    if (bool) {
      bool = new Boolean(bool);
      bool.blocked = result === 'blocked';
    }

    addTest('flash', function () {
      return bool;
    });

    if (embed && body.contains(embed)) {
      while (embed.parentNode !== body) {
        embed = embed.parentNode;
      }

      body.removeChild(embed);
    }
  };

  var easy_detect;
  var activex;

  try {
    activex = 'ActiveXObject' in window && 'Pan' in new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash');
  } catch (e) {}

  easy_detect = !('plugins' in navigator && 'Shockwave Flash' in navigator.plugins || activex);

  if (easy_detect || isSVG) {
    runTest(false);
  } else {
    var embed = createElement('embed');
    var body = getBody();
    var blockedDetect;
    var inline_style;
    embed.type = 'application/x-shockwave-flash';
    body.appendChild(embed);

    if (!('Pan' in embed) && !activex) {
      attachBody(body);
      runTest('blocked', embed);
      removeFakeBody(body);
      return;
    }

    blockedDetect = function () {
      attachBody(body);

      if (!docElement.contains(body)) {
        body = document.body || body;
        embed = createElement('embed');
        embed.type = 'application/x-shockwave-flash';
        body.appendChild(embed);
        return setTimeout(blockedDetect, 1000);
      }

      if (!docElement.contains(embed)) {
        runTest('blocked');
      } else {
        inline_style = embed.style.cssText;

        if (inline_style !== '') {
          runTest('blocked', embed);
        } else {
          runTest(true, embed);
        }
      }

      removeFakeBody(body);
    };

    setTimeout(blockedDetect, 10);
  }
});
export default createAsyncTestListener("flash");
