import { Todo, TodoElement } from "./todo";
//import class from src

let todoContainer = document.getElementById("todoContainer") as HTMLDivElement | null;//check null for every element variable

let myButton = document.getElementById("myButton") as HTMLButtonElement | null;

if (myButton == null) {
    alert("Button not found.");
} else {
    
    //group method together as a class(component)
    myButton.onclick = function () {
        if(myButton ==  null || todoContainer == null) return; //undefined
        //alert("Hello World!");

        let todo = new Todo("Example Title");

        let todoElement = new TodoElement(todo);
        todoElement.spawn(todoContainer); // "todoContainer"

        todo.push(todo);//todoElement

        //manipulate the element
        todo.completed = true;

        //call the delete after alert
        // alert();
        // todoElement.delete(todoContainer); // "todoContainer"
        console.log(todo);
    }
}