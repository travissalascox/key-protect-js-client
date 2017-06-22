import { CollectionMetadata } from "./collectionMetadata.model";
import { Error } from "./error.model";
import { Key } from "./key.model";

export class Collection {
    public metadata: CollectionMetadata;
    public resources: Array<Key | Error>;

    constructor() {
        this.metadata = new CollectionMetadata();
        this.resources = new Array<Key | Error>();
    }

    public append(member: Key | Error): Collection {
        this.metadata.collectionTotal++;
        this.resources.push(member);
        return this;
    }
}
