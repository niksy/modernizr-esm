/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/src/hasEvent.js **/
import ModernizrProto from './Modernizr.js';
import createElement from './createElement.js';
import docElement from './docElement.js';

var _isBrowser = typeof window !== "undefined";

var hasEvent = _isBrowser && function () {
  var needsFallback = !('onblur' in docElement);

  function inner(eventName, element) {
    var isSupported;

    if (!eventName) {
      return false;
    }

    if (!element || typeof element === 'string') {
      element = createElement(element || 'div');
    }

    eventName = 'on' + eventName;
    isSupported = eventName in element;

    if (!isSupported && needsFallback) {
      if (!element.setAttribute) {
        element = createElement('div');
      }

      element.setAttribute(eventName, '');
      isSupported = typeof element[eventName] === 'function';

      if (element[eventName] !== undefined) {
        element[eventName] = undefined;
      }

      element.removeAttribute(eventName);
    }

    return isSupported;
  }

  return inner;
}();

ModernizrProto.hasEvent = hasEvent;
export default hasEvent;
