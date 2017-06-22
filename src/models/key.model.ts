export class Key {
    public id: string;
    public name: string;
    public type: string;
    public state: number;
    public algorithmType: string;
    public payload: string;
    public expirationDate: string;
    public creationDate: string;
    public extractable: boolean;

    constructor() {
        this.type = "application/vnd.ibm.kms.key+json";
    }
}
