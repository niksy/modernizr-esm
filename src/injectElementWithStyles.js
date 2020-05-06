/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/src/injectElementWithStyles.js **/
import './Modernizr.js';
import docElement from './docElement.js';
import createElement from './createElement.js';
import getBody from './getBody.js';

function injectElementWithStyles(rule, callback, nodes, testnames) {
  var mod = 'modernizr';
  var style;
  var ret;
  var node;
  var docOverflow;
  var div = createElement('div');
  var body = getBody();

  if (parseInt(nodes, 10)) {
    while (nodes--) {
      node = createElement('div');
      node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
      div.appendChild(node);
    }
  }

  style = createElement('style');
  style.type = 'text/css';
  style.id = 's' + mod;
  (!body.fake ? div : body).appendChild(style);
  body.appendChild(div);

  if (style.styleSheet) {
    style.styleSheet.cssText = rule;
  } else {
    style.appendChild(document.createTextNode(rule));
  }

  div.id = mod;

  if (body.fake) {
    body.style.background = '';
    body.style.overflow = 'hidden';
    docOverflow = docElement.style.overflow;
    docElement.style.overflow = 'hidden';
    docElement.appendChild(body);
  }

  ret = callback(div, rule);

  if (body.fake) {
    body.parentNode.removeChild(body);
    docElement.style.overflow = docOverflow;
    docElement.offsetHeight;
  } else {
    div.parentNode.removeChild(div);
  }

  return !!ret;
}

export default injectElementWithStyles;
