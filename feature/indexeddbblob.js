/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.10.0/feature-detects/indexeddbblob.js **/
import Modernizr, { addTest, createAsyncTestListener } from "../src/Modernizr.js";
import prefixed from "../src/prefixed.js";
import "./indexeddb.js";
Modernizr.addAsyncTest(function () {
  var indexeddb;
  var dbname = 'detect-blob-support';
  var supportsBlob = false;
  var openRequest;
  var db;
  var putRequest;

  try {
    indexeddb = prefixed('indexedDB', window);
  } catch (e) {}

  if (!(Modernizr.indexeddb && Modernizr.indexeddb.deletedatabase)) {
    return false;
  }

  try {
    indexeddb.deleteDatabase(dbname).onsuccess = function () {
      openRequest = indexeddb.open(dbname, 1);

      openRequest.onupgradeneeded = function () {
        openRequest.result.createObjectStore('store');
      };

      openRequest.onsuccess = function () {
        db = openRequest.result;

        try {
          putRequest = db.transaction('store', 'readwrite').objectStore('store').put(new Blob(), 'key');

          putRequest.onsuccess = function () {
            supportsBlob = true;
          };

          putRequest.onerror = function () {
            supportsBlob = false;
          };
        } catch (e) {
          supportsBlob = false;
        } finally {
          addTest('indexeddbblob', supportsBlob);
          db.close();
          indexeddb.deleteDatabase(dbname);
        }
      };
    };
  } catch (e) {
    addTest('indexeddbblob', false);
  }
});
export default createAsyncTestListener("indexeddbblob");
