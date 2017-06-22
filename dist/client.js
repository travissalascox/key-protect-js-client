"use strict";
var Request = require("request-promise-native");
var collections_model_1 = require("./models/collections.model");
var mime_1 = require("./constants/mime");
var Client = (function () {
    function Client(host, token) {
        this.path = "api/v2/key";
        if (host.endsWith("/")) {
            host = host.slice(0, -1);
        }
        this._host = host;
        this.options.headers = {
            "Authorization": token,
            "Content-Type": mime_1.MIME.key,
        };
    }
    Client.prototype.create = function (key) {
        this.options.uri = this._host + "/" + this.path;
        var collection = new collections_model_1.Collection();
        collection.append(key);
        this.options.body = JSON.stringify(collection);
        return Request.post(this.options)
            .then(function (response) {
            var returnedCollection = response;
            var collectionType = returnedCollection.metadata.collectionType;
            if (collectionType === mime_1.MIME.key) {
                var returnedKey = returnedCollection.resources[0];
                return returnedKey;
            }
            var returnedError = returnedCollection.resources[0];
            return returnedError.errMsg;
        })
            .catch(function (error) {
            var transportError = String(error);
            return transportError;
        });
    };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=client.js.map