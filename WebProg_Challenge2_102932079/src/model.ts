//create class here and remember to ref to index.ts
//`need a class for the quiz itself (question text x1 selection text x 4 and collect answer with ref number)
export class Quiz{ 
    Question: string;
    Option1: string;
    Option2: string;
    Option3: string;
    Option4: string;
    Answer: number;
    // there were Property 'Question' has no initializer and is not definitely assigned in the constructor issues after the instantiate the error will disappear

    //ctor
    constructor(question: string, option1: string, option2: string, option3: string, option4: string, answer: number){ //! wrong datatype for answer (string - > number)
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
    Element!: HTMLElement | null; //Declaring an HTMLElement Typescript 
    //Property 'Element' has no initializer and is not definitely assigned in the constructor '!'
 
    Count: number = 0; // count 1 or not 0 a container for keeping the points
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
        questionDivElement.className = "questionblock"; //classlist give error (read-only)
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
        option1ButtonElement.classList.add("optionblock");
        //`assign value to the button tag or a order of button
        option1ButtonElement.value = '1'; //the value here is for checkbutton string later so it should be '' not ""

        ///////////////////////////////////////////////////////////////////////////////option2 section
        let option2DivElement = document.createElement("div");
        let option2ButtonElement = document.createElement("button");
        let option2TextNode = document.createTextNode(this.Quiz.Option2);
        option2ButtonElement.appendChild(option2TextNode);
        option2DivElement.appendChild(option2ButtonElement);
        option2ButtonElement.classList.add("optionblock");
        option2ButtonElement.value = '2';

        ///////////////////////////////////////////////////////////////////////////////option3 section
        let option3DivElement = document.createElement("div");
        let option3ButtonElement = document.createElement("button");
        let option3TextNode = document.createTextNode(this.Quiz.Option3);
        option3ButtonElement.appendChild(option3TextNode);
        option3DivElement.appendChild(option3ButtonElement);
        option3ButtonElement.classList.add("optionblock");
        option3ButtonElement.value = '3';

        ///////////////////////////////////////////////////////////////////////////////option4 section
        let option4DivElement = document.createElement("div");
        let option4ButtonElement = document.createElement("button");
        let option4TextNode = document.createTextNode(this.Quiz.Option4);
        option4ButtonElement.appendChild(option4TextNode);
        option4DivElement.appendChild(option4ButtonElement);
        option4ButtonElement.classList.add("optionblock");
        option4ButtonElement.value = '4';

        /////////////////////////////////////////////////////////////////////assemble them together
        //` add all newly created div variable to element
        this.Element.appendChild(questionDivElement); //everything were appended in the div just need to append div to the root
        this.Element.appendChild(option1DivElement);
        this.Element.appendChild(option2DivElement);
        this.Element.appendChild(option3DivElement);
        this.Element.appendChild(option4DivElement);

        //` append element package to the root
        Root.appendChild(this.Element);

        ////////////////////////////////////////////////////////////////////onclick event for a selected effect
        //`crate variable for all button element 1-4
        let buttonElementArray: HTMLButtonElement[] = [option1ButtonElement, option2ButtonElement, option3ButtonElement, option4ButtonElement];
        //Array.prototype.forEach() The forEach() method executes a provided function once for each array element.
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
        buttonElementArray.forEach((element) => {
            element.onclick = () => {
                if (element.style.backgroundColor == "#FBEFEF") {
                    element.style.backgroundColor = "#FFFFFF";
                }
                else if (element.style.backgroundColor == "#FFFFFF") { // can not use else because this is not two in one condition
                    element.style.backgroundColor = "#FBEFEF";
                    this.CheckButton = element.value; 
                    //? how to add the The button disabled attribute to other unselected button at the same time
                    //document.getElementById("myBtn").disabled = true;The disabled property sets or returns whether a button is disabled, or not.
                    //A disabled element is unusable and un-clickable. Disabled elements are usually rendered in gray by default in browsers.
                    //this property reflects the HTML disabled attribute.
                }
            }
        })

    }
    ////////////////////////////////////////////////////////////////////count point method
    //`another method for count points
    CountPoints(){
        if (parseInt(this.CheckButton) == this.Quiz.Answer) { //` yep problem fixed if got datatype issue check the attribute and constructor
            //! This condition will always return 'false' since the types 'number' and 'string' have no overlap
            // checkbutton is string after parseint is number, answer is number , but the system still think is string
            // Converting strings to numbers with vanilla JavaScript
            // The parseInt() method converts a string into an integer (a whole number). parseFloat() Number() both no working
            this.Count = 1;
        } else {
            this.Count = 0;
        }
    }
}