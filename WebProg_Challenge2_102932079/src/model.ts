//`create class here and remember to ref to index.ts

//`need a class for the quiz itself (question text x1 selection text x 4 and collect answer with ref number)

export class Quiz{ // there were Property 'Question' has no initializer and is not definitely assigned in the constructor issues after the instantiate the error will disappear
    Question: string;
    Option1: string;
    Option2: string;
    Option3: string;
    Option4: string;
    Answer: string;

    //ctor
    constructor(question: string, option1: string, option2: string, option3: string, option4: string, answer: string){
        this.Question = question;
        this.Option1 = option1;
        this.Option2 = option2;
        this.Option3 = option3;
        this.Option4 = option4;
        this.Answer = answer;
    }
}

//` need another class contain the quiz and some other attribute 