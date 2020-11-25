//create class here and remember to ref to index.ts
//`need a class for the quiz itself (question text x1 selection text x 4 and collect answer with ref number)
export class Quiz{ 
    Question: string;
    Option1: string;
    Option2: string;
    Option3: string;
    Option4: string;
    Answer: string;
    // there were Property 'Question' has no initializer and is not definitely assigned in the constructor issues after the instantiate the error will disappear

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

//need another class contain the quiz and some other attribute 
//`another class package
export class Package {
    Quiz: Quiz; 
    Element: HTMLElement | null;
    Count: number = 0; // count 1 or not 0
    CheckButton: string = '0';  // for check the answer number

    //ctor
    constructor(pQuiz: Quiz){
        this.Quiz = pQuiz;
    }

    //`the main function for create question and its elements
    spawn(Root: HTMLElement) {
        //////////////////////////////////////////////////////////////////////////box
        //`create a div element variable and a class name for this div element
        //the div for everything we created
        this.Element = document.createElement("div") as HTMLDivElement;
        this.Element.classList.add("box");

        /////////////////////////////////////////////////////////////////////////////question section
        //`create variable for question element
        let questionDivElement = document.createElement("div");
        //`create variable for question text and pass the value in textnode
        let questionTextNode = document.createTextNode(this.Quiz.Question);
        //`pass the node in element
        questionDivElement.appendChild(questionTextNode);
        //`add a class name for question section
        questionDivElement.className = "QuestionBlock"; //classlist give error (read-only)
        //Using "classList", you can add or remove a class without affecting any others the element may have. But if you assign "className", it will wipe out any existing classes while adding the new one (or if you assign an empty string it will wipe out all of them).
    }
}