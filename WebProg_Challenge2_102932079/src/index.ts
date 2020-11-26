import "./styles.css"; // css
//the collection of js  need go create class first with export
//remember to import my class
import { Quiz, Package } from "./model";
//! box < = > display using box give error the package goes to display not box
//`create a variable for toggle the target div element (display)
let display = document.getElementById("display") as HTMLDivElement; //may need to change the display from class to id
//!  as HTMLElement

//`start to insert questions text /question option1 option2 option3 option4 answerNO
let Quiz1 = new Quiz("What is the rarest blood type?", "a)O", "b)A", "c)B", "d)AB",4);
let Package1 = new Package(Quiz1);
//`make the package1 spawn in display div zone
Package1.spawn(display);
//!some issue with the display variable try id
//Argument of type 'HTMLCollectionOf<Element>' is not assignable to parameter of type 'HTMLElement'.Type 'HTMLCollectionOf<Element>' is missing the following properties from type 'HTMLElement': accessKey, accessKeyLabel, autocapitalize, dir, and 234 more.ts(2345)

let Quiz2 = new Quiz("How many bones are there in the human body?", "a)206", "b)205", "c)201", "d)209",1);
let Package2 = new Package(Quiz2);
Package2.spawn(display);

let Quiz3 = new Quiz("Fe is the chemical symbol for…", "a)Zinc", "b)Hydrogen", "c)Fluorine", "d)Iron",4);
let Package3 = new Package(Quiz3);
Package3.spawn(display);

let Quiz4 = new Quiz("Which planet in our solar system is the largest?", "a)Jupiter", "b)Saturn", "c)Neptune", "d)Earth",4);
let Package4 = new Package(Quiz4);
Package4.spawn(display);

let Quiz5 = new Quiz("Which ocean is the largest?", "a)Indian", "b)Pacific", "c)Atlantic", "d)Arctic",2);
let Package5 = new Package(Quiz5);
Package5.spawn(display);

//`create a block for submit button 
//`variable for submit button div and button element and textnode
let SubmitDivElement = document.createElement("div");
let SubmitButtonElement = document.createElement("button");
let SubmitTextNode = document.createTextNode("SUBMIT");
//`assemble them and insert it to display add a class name
SubmitButtonElement.appendChild(SubmitTextNode);
SubmitDivElement.appendChild(SubmitButtonElement);
SubmitButtonElement.classList.add("submit");
display.appendChild(SubmitDivElement);

//` onclick event recalls countpoints()  from package class for sum up the points
SubmitButtonElement.onclick = () => {
    Package1.CountPoints();
    Package2.CountPoints();
    Package3.CountPoints();
    Package4.CountPoints();
    Package5.CountPoints(); // missing a package
    let result = Package1.Count + Package2.Count + Package3.Count + Package4.Count + Package5.Count
    alert("You got " + result + " of 5");
    //? variable in string es5 es6 $'' how to work
}


//!model.ts:91 Uncaught TypeError: Cannot read property 'appendChild' of null (caused by toggled the wrong div)