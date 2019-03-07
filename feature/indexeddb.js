/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.6.0/feature-detects/indexeddb.js **/
import prefixed from '../src/prefixed.js';
import Modernizr, { addTest, createAsyncTestListener } from "../src/Modernizr.js";
Modernizr.addAsyncTest(function () {
  var indexeddb;

  try {
    indexeddb = prefixed('indexedDB', window);
  } catch (e) {}

  if (!!indexeddb) {
    var testDBName = 'modernizr-' + Math.random();
    var req = indexeddb.open(testDBName);

    req.onerror = function () {
      if (req.error && req.error.name === 'InvalidStateError') {
        addTest('indexeddb', false);
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
