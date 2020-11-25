//the collection of js  need go create class first with export
//remember to import my class
import { Quiz, Package } from "./model";

//`create a variable for toggle the target div element (display)
let display = document.getElementById("display") as HTMLElement; //may need to change the display from class to id
//!  as HTMLElement

//`start to insert questions text /question option1 option2 option3 option4 answerNO
let Quiz1 = new Quiz("What is the rarest blood type?", "O", "A", "B", "AB",4);
let Package1 = new Package(Quiz1);
//`make the package1 spawn in display div zone
Package1.spawn(display);
//!some issue with the display variable try id
//Argument of type 'HTMLCollectionOf<Element>' is not assignable to parameter of type 'HTMLElement'.Type 'HTMLCollectionOf<Element>' is missing the following properties from type 'HTMLElement': accessKey, accessKeyLabel, autocapitalize, dir, and 234 more.ts(2345)