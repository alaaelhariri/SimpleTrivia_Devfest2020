export abstract class Identifiable {
    public id?: number;

    constructor(obj: Identifiable = {} as Identifiable) {
        this.id = obj.id;
    }
}
