/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/event/deviceorientation-motion.js **/
import Modernizr from '../../src/Modernizr.js';
Modernizr.addTest('devicemotion', 'DeviceMotionEvent' in window);
Modernizr.addTest('deviceorientation', 'DeviceOrientationEvent' in window);
export var devicemotion = Modernizr.devicemotion;
export var deviceorientation = Modernizr.deviceorientation;
