/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/src/getBody.js **/
import createElement from './createElement.js';
import isSVG from './isSVG.js';

function getBody() {
  var body = document.body;

  if (!body) {
    body = createElement(isSVG ? 'svg' : 'body');
    body.fake = true;
  }

  return body;
}

export default getBody;
