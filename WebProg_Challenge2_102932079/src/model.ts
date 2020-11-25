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
        let questionTextNode = document.createTextNode(this.Quiz.Question); //create the textnode with the values of quiz.question
        //`pass the node in element
        questionDivElement.appendChild(questionTextNode);
        //`add a class name for question section
        questionDivElement.className = "QuestionBlock"; //classlist give error (read-only)
        //Using "classList", you can add or remove a class without affecting any others the element may have. But if you assign "className", it will wipe out any existing classes while adding the new one (or if you assign an empty string it will wipe out all of them).

        ///////////////////////////////////////////////////////////////////////////////option1 section
        //`create variable for option1 divelement buttonelement and textnode
        let option1DivElement = document.createElement("div");
        let option1ButtonElement = document.createElement("button");
        let option1TextNode = document.createTextNode(this.Quiz.Option1);
        //`pass option1 value in button textnode
        option1ButtonElement.appendChild(option1TextNode);
        //`add option1 button to option1 div
        option1DivElement.appendChild(option1ButtonElement);
        //`assign option1 button to optionblock
        option1ButtonElement.classList.add("OptionBlock");
        //`assign value to the button tag or a order of button
        option1ButtonElement.value = "1";

        ///////////////////////////////////////////////////////////////////////////////option2 section
        let option2DivElement = document.createElement("div");
        let option2ButtonElement = document.createElement("button");
        let option2TextNode = document.createTextNode(this.Quiz.Option2);
        option2ButtonElement.appendChild(option2TextNode);
        option2DivElement.appendChild(option2ButtonElement);
        option2ButtonElement.classList.add("OptionBlock");
        option2ButtonElement.value = "2";

        ///////////////////////////////////////////////////////////////////////////////option3 section
        let option3DivElement = document.createElement("div");
        let option3ButtonElement = document.createElement("button");
        let option3TextNode = document.createTextNode(this.Quiz.Option3);
        option3ButtonElement.appendChild(option3TextNode);
        option3DivElement.appendChild(option3ButtonElement);
        option3ButtonElement.classList.add("OptionBlock");
        option3ButtonElement.value = "3";

        ///////////////////////////////////////////////////////////////////////////////option4 section
        let option4DivElement = document.createElement("div");
        let option4ButtonElement = document.createElement("button");
        let option4TextNode = document.createTextNode(this.Quiz.Option4);
        option4ButtonElement.appendChild(option4TextNode);
        option4DivElement.appendChild(option4ButtonElement);
        option4ButtonElement.classList.add("OptionBlock");
        option4ButtonElement.value = "4";

        /////////////////////////////////////////////////////////////////////assemble them together
        //` add all newly created div variable to element
        this.Element.appendChild(questionDivElement); //everything were appended in the div just need to append div to the root
        this.Element.appendChild(option1DivElement);
        this.Element.appendChild(option2DivElement);
        this.Element.appendChild(option3DivElement);
        this.Element.appendChild(option4DivElement);

        //` append element package to the root
        Root.appendChild(this.Element);
    }
}