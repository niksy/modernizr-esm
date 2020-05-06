/** Original source code: 
 * https://github.com/Modernizr/Modernizr/blob/v3.11.1/src/Modernizr
 * https://github.com/Modernizr/Modernizr/blob/v3.11.1/src/ModernizrProto
 * https://github.com/Modernizr/Modernizr/blob/v3.11.1/src/addTest
 * https://github.com/Modernizr/Modernizr/blob/v3.11.1/src/hasOwnProp
 * https://github.com/Modernizr/Modernizr/blob/v3.11.1/src/testRunner
 * https://github.com/Modernizr/Modernizr/blob/v3.11.1/src/tests
**/
import is from './is';

var _isBrowser = typeof window !== "undefined";

var tests = [];

function testRunner() {
  var featureNames;
  var feature;
  var aliasIdx;
  var result;
  var nameIdx;
  var featureName;
  var featureNameSplit;

  for (var featureIdx in tests) {
    if (tests.hasOwnProperty(featureIdx)) {
      featureNames = [];
      feature = tests[featureIdx];

      if (feature.name) {
        featureNames.push(feature.name.toLowerCase());

        if (feature.options && feature.options.aliases && feature.options.aliases.length) {
          for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
            featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
          }
        }
      }

      result = is(feature.fn, 'function') ? _isBrowser && feature.fn() : feature.fn;

      for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
        featureName = featureNames[nameIdx];
        featureNameSplit = featureName.split('.');
        addTestResult(featureNameSplit, result);
      }
    }
  }
}

var ModernizrProto = {
  _version: "3.11.1",
  _q: [],
  on: function (test, cb) {
    var self = this;
    setTimeout(function () {
      cb(self[test]);
    }, 0);
  },
  addTest: function (name, fn, options) {
    tests.push({
      name: name,
      fn: fn,
      options: options
    });
    testRunner();
    tests = [];

    for (var i = 0; i < Modernizr._q.length; i++) {
      Modernizr._q[i]();
    }
  },
  addAsyncTest: function (fn) {
    tests.push({
      name: null,
      fn: fn
    });
    testRunner();
    tests = [];

    for (var i = 0; i < Modernizr._q.length; i++) {
      Modernizr._q[i]();
    }
  }
};

var Modernizr = function () {};

Modernizr.prototype = ModernizrProto;
Modernizr = new Modernizr();
var hasOwnProp;

(function () {
  var _hasOwnProperty = {}.hasOwnProperty;

  if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
    hasOwnProp = function (object, property) {
      return _hasOwnProperty.call(object, property);
    };
  } else {
    hasOwnProp = function (object, property) {
      return property in object && is(object.constructor.prototype[property], 'undefined');
    };
  }
})();

ModernizrProto._l = {};

ModernizrProto.on = function (feature, cb) {
  if (!this._l[feature]) {
    this._l[feature] = [];
  }

  this._l[feature].push(cb);

  if (Modernizr.hasOwnProperty(feature)) {
    setTimeout(function () {
      Modernizr._trigger(feature, Modernizr[feature]);
    }, 0);
  }
};

ModernizrProto._trigger = function (feature, res) {
  if (!this._l[feature]) {
    return;
  }

  var cbs = this._l[feature];
  setTimeout(function () {
    var i, cb;

    for (i = 0; i < cbs.length; i++) {
      cb = cbs[i];
      cb(res);
    }
  }, 0);
  delete this._l[feature];
};

function addTest(feature, test) {
  if (typeof feature === 'object') {
    for (var key in feature) {
      if (hasOwnProp(feature, key)) {
        addTest(key, feature[key]);
      }
    }
  } else {
    feature = feature.toLowerCase();
    var featureNameSplit = feature.split('.');
    var last = Modernizr[featureNameSplit[0]];

    if (featureNameSplit.length === 2) {
      last = last[featureNameSplit[1]];
    }

    if (typeof last !== 'undefined') {
      return Modernizr;
    }

    test = typeof test === 'function' ? _isBrowser && test() : test;
    addTestResult(featureNameSplit, test);

    Modernizr._trigger(feature, test);
  }

  return Modernizr;
}

Modernizr._q.push(function () {});

function addTestResult(featureNameSplit, result) {
  if (featureNameSplit.length === 1) {
    Modernizr[featureNameSplit[0]] = result;
  } else {
    if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
      Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
    }

    Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
  }
}

function createAsyncTestListener(feature) {
  return function (cb) {
    if (typeof cb === "function") {
      Modernizr.on(feature, cb);
      return;
    }

    return new Promise(function (resolve) {
      Modernizr.on(feature, resolve);
    });
  };
}

export default Modernizr;
export { addTest, createAsyncTestListener };
