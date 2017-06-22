"use strict";
var collectionMetadata_model_1 = require("./collectionMetadata.model");
var Collection = (function () {
    function Collection() {
        this.metadata = new collectionMetadata_model_1.CollectionMetadata();
        this.resources = new Array();
    }
    Collection.prototype.append = function (member) {
        this.metadata.collectionTotal++;
        this.resources.push(member);
        return this;
    };
    return Collection;
}());
exports.Collection = Collection;
//# sourceMappingURL=collections.model.js.map