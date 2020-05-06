/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/notification.js **/
import Modernizr from "../src/Modernizr.js";
Modernizr.addTest('notification', function () {
  if (!window.Notification || !window.Notification.requestPermission) {
    return false;
  }

  if (window.Notification.permission === 'granted') {
    return true;
  }

  try {
    new window.Notification('');
  } catch (e) {
    if (e.name === 'TypeError') {
      return false;
    }
  }

  return true;
});
export default Modernizr.notification;
