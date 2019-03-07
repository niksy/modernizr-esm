/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.0/src/isSVG.js **/
import docElement from './docElement.js';
var isSVG = docElement.nodeName.toLowerCase() === 'svg';
export default isSVG;
