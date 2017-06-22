import * as Request from "request-promise-native";

// import models
import { Collection } from "./models/collections.model";
import { Error } from "./models/error.model";
import { Key } from "./models/key.model";

// import constants
import { MIME } from "./constants/mime";

export class Client {
    private path: string = "api/v2/key";
    private options: (Request.OptionsWithUri & Request.RequestPromiseOptions);
    private _host: string;

    constructor(host: string, token: string) {
        if (host.endsWith("/")) {
            host = host.slice(0, -1);
        }
        this._host = host;
        this.options.headers = {
            "Authorization": token,
            "Content-Type": MIME.key,
        };
    }

    public create(key: Key): Promise<Key | string> {
        this.options.uri = `${this._host}/${this.path}`;
        const collection: Collection = new Collection();
        collection.append(key);
        this.options.body = JSON.stringify(collection);
        return Request.post(this.options)
            .then((response) => {
                const returnedCollection: Collection = response as Collection;
                const collectionType: string = returnedCollection.metadata.collectionType;

                if (collectionType === MIME.key) {
                    const returnedKey: Key = returnedCollection.resources[0] as Key;
                    return returnedKey;
                }

                const returnedError: Error = returnedCollection.resources[0] as Error;
                return returnedError.errMsg;
            })
            .catch((error: any) => {
                const transportError: string = String(error);
                return transportError;
            });
    }
}
