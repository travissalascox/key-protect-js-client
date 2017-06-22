"use strict";
var key = "application/vnd.ibm.kms.key+json";
var error = "application/vnd.ibm.kms.error+json";
var collection = "application/vnd.ibm.kms.collection+json";
var MIME = (function () {
    function MIME() {
    }
    Object.defineProperty(MIME, "key", {
        get: function () {
            return key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MIME, "error", {
        get: function () {
            return error;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MIME, "collection", {
        get: function () {
            return collection;
        },
        enumerable: true,
        configurable: true
    });
    return MIME;
}());
exports.MIME = MIME;
//# sourceMappingURL=mime.js.map