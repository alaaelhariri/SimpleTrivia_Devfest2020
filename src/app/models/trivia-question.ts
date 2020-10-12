import { Identifiable } from './identifiable';

export class TriviaQuestion extends Identifiable {
    public question: string;
    public answer: string;

    constructor(obj: TriviaQuestion = {} as TriviaQuestion) {
        super(obj);
        this.question = obj.question;
        this.answer = obj.answer;
    }
}
