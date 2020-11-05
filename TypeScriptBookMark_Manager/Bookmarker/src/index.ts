//===========================DEMO==================================
// import { Todo, TodoElement } from "./todo";
// //import class from src

// let todoContainer = document.getElementById("todoContainer") as HTMLDivElement | null;//check null for every element variable

// let myButton = document.getElementById("myButton") as HTMLButtonElement | null;

// if (myButton == null) {
//     alert("Button not found.");
// } else {
    
//     //group method together as a class(component)
//     myButton.onclick = function () {
//         if(myButton ==  null || todoContainer == null) return; //undefined
//         //alert("Hello World!");

//         let todo = new Todo("Example Title");

//         let todoElement = new TodoElement(todo);
//         todoElement.spawn(todoContainer); // "todoContainer"

//         todo.push(todo);//todoElement

//         //manipulate the element
//         todo.completed = true;

//         //call the delete after alert
//         // alert();
//         // todoElement.delete(todoContainer); // "todoContainer"
//         console.log(todo);
//     }
// }

//================================================================================================
//both class need to be import
import { Bookmark, CreateElementBookMark } from "./bookmark";

//storage for bookmark been added variable array
let bookMarkStorage = [{}];

//create variable for the element in display area
let bookMarkBox = document.getElementById("bookMarkBox") as HTMLDivElement | null;
let myButton = document.getElementById("myButton") as HTMLButtonElement | null;
let userInput = document.getElementById("input") as HTMLInputElement | null;
let userTitle = document.getElementById("title") as HTMLInputElement | null;

//define the core function of the project button(discovery the null conditon)
if (myButton == null || bookMarkBox == null) {
    alert("Button not found!")
}else{
    myButton.onclick = function () {
        //all form been to be filled
        if (userTitle == null || userInput == null || myButton == null || bookMarkBox == null){
            alert("All form need to be filled");
            return;
        }else{
            //new instance of a bookmark
            let bk1 = new Bookmark(userTitle.value, false, '')
            //using the setter append the user input o the bookmark
            bk1.setUrl(userInput.value);
            //add the bookmark to the array
            bookMarkStorage.push(bk1);

            //instantiate a new instance of bookmark element
            let el = new CreateElementBookMark(bk1);

            let fragment = document.getElementById("bookmark-template") as HTMLTemplateElement;
            //bookmarkel gets the bookmark and then passes a method to it which takes fragment ( the template)
            const bookmarkEl = el.createBookMark(fragment);
            //null checking
            if(bookmarkEl == null){
                alert("Error occured!")
                return;
            }

            //display the array
            let bmOutput = document.getElementsByClassName("bmOutput")[0];
            bmOutput.appendChild(bookmarkEl)
            console.log(bookMarkStorage, bookmarkEl)


        }
    }
}