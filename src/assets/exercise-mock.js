export class Exercise{
    constructor(uniqueId, question, sentence, type,rightAnswersNumber, wrongAnswersNumber){
        this.uniqueId=uniqueId;
        this.question=question;
        this.type=type;
        this.rightAnswersNumber=rightAnswersNumber;
        this.wrongAnswersNumber=wrongAnswersNumber;
    }
    get uniqueId(){
        return this.uniqueId
    }
    get question(){
        return this.question
    }
    get type(){
        return this.type
    }
    get rightAnswersNumber(){
        return this.rightAnswersNumber
    }
    get wrongAnswersNumber(){
        return this.wrongAnswersNumber
    }
}
