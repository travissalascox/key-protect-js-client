import { MIME } from "../constants/mime";

export class CollectionMetadata {
    public collectionType: string;
    public collectionTotal: number;

    constructor() {
        // default MIME type is set to key
        this.collectionType = MIME.key;
    }
}
