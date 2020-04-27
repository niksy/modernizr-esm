/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.0/feature-detects/event/deviceorientation-motion.js **/
import Modernizr from "../../src/Modernizr.js";

var _isBrowser = typeof window !== "undefined";

Modernizr.addTest('devicemotion', _isBrowser && 'DeviceMotionEvent' in window);
Modernizr.addTest('deviceorientation', _isBrowser && 'DeviceOrientationEvent' in window);
export var devicemotion = Modernizr.devicemotion;
export var deviceorientation = Modernizr.deviceorientation;
