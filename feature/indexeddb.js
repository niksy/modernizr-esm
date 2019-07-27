/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/indexeddb.js **/
import prefixed from "../src/prefixed.js";
import Modernizr, { addTest, createAsyncTestListener } from "../src/Modernizr.js";
Modernizr.addAsyncTest(function () {
  var indexeddb;

  try {
    indexeddb = prefixed('indexedDB', window);
  } catch (e) {}

  if (indexeddb) {
    var testDBName = 'modernizr-' + Math.random();
    var req;

    try {
      req = indexeddb.open(testDBName);
    } catch (e) {
      addTest('indexeddb', false);
      return;
    }

    req.onerror = function (event) {
      if (req.error && (req.error.name === 'InvalidStateError' || req.error.name === 'UnknownError')) {
        addTest('indexeddb', false);
        event.preventDefault();
      } else {
        addTest('indexeddb', true);
        detectDeleteDatabase(indexeddb, testDBName);
      }
    };

    req.onsuccess = function () {
      addTest('indexeddb', true);
      detectDeleteDatabase(indexeddb, testDBName);
    };
  } else {
    addTest('indexeddb', false);
  }
});

function detectDeleteDatabase(indexeddb, testDBName) {
  var deleteReq = indexeddb.deleteDatabase(testDBName);

  deleteReq.onsuccess = function () {
    addTest('indexeddb.deletedatabase', true);
  };

  deleteReq.onerror = function () {
    addTest('indexeddb.deletedatabase', false);
  };
}

export var indexeddb = createAsyncTestListener("indexeddb");
export var indexeddbDeletedatabase = createAsyncTestListener("indexeddb.deletedatabase");
