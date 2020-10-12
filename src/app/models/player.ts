import { Identifiable } from './identifiable';

export class Player extends Identifiable {
    public firstName: string;
    public lastName: string;
    public score?: number;

    constructor(obj: Player = {} as Player) {
        super(obj);
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.score = obj.score ? obj.score : 0;
    }
}
