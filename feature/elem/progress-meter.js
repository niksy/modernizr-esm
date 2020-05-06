/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.11.1/feature-detects/elem/progress-meter.js **/
import Modernizr from "../../src/Modernizr.js";
import createElement from "../../src/createElement.js";
Modernizr.addTest('progressbar', createElement('progress').max !== undefined);
Modernizr.addTest('meter', createElement('meter').max !== undefined);
export var progressbar = Modernizr.progressbar;
export var meter = Modernizr.meter;
