const key = "application/vnd.ibm.kms.key+json";
const error = "application/vnd.ibm.kms.error+json";
const collection =  "application/vnd.ibm.kms.collection+json";

export class MIME {
    static get key(): string {
        return key;
    }

    static get error(): string {
        return error;
    }

    static get collection(): string {
        return collection;
    }
}
