// create variable for these element
// const dont change let will change
const myForm = document.getElementById("myForm");
const myList = document.getElementById("myList");
const taskInput = document.getElementById("taskInput");
const myClearButton = document.getElementById("myClearButton");

//The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.

myClearButton.addEventListener("click", function() { //Attach a click event to a <button> element with funciton()methiod
    myList.innerHTML = ""; // empty like reset
});
//define delete all button

//the submit funciton / form subit / button click
myForm.onsubmit = function(event) {//The onsubmit attribute fires when a form is submitted.

    event.preventDefault();//  to stop the form actually submitting The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

    // var(gobally scope, less used), let , const (more commonlly  used , let and const have a block-level scope)
    //The createElement() method creates an Element Node with the specified name.
    var newListItem = document.createElement("li"); // create new element variable for li under ul

    // createTextNode() Method HTML elements often consists of both an element node and a text node.To create a header (e.g. <h1>), you must create both an <h1> element and a text node:
    //need to create variable for element and then create vaiable for content and pass the content into the element innerhtml

    newListItem.innerHTML = taskInput.value; // new li is the value we put in input
    // create new li element and pass input value in this list

    var newListItemCheckbox = document.createElement("input"); // create mew element tick box

    newListItemCheckbox.setAttribute("type", "checkbox"); //The setAttribute() method adds the specified attribute to an element, and gives it the specified value.    If the specified attribute already exists, only the value is set/changed.
    // type and checkbox are the different css sytle sheet with set attribute change the newlisttitemcheckbox element css ref from type to checkbox

    newListItem.appendChild(newListItemCheckbox); //The appendChild() method appends a node as the last child of a node.
    //add the tick box into the newlistitem

    newListItemCheckbox.addEventListener("change", function(){ //the method for the box is ticked or not ticked effect
        console.log(this);// this key word
        if(this.checked){
            this.parentNode.style.background = "green"; // change css when event happens
        }else{
            this.parentNode.style.background = "white"; // change css when event happens
        }
        
    })

    //lastElementChild firstElementChild children[1]array
    var newListItemButton = document.createElement("button"); // create new delete button for individual list item 
    newListItemButton.innerHTML = "Delete"; // change the text of the delete button to delete
    newListItem.appendChild(newListItemButton); // add the delete button into newlistitem same with tickbox
    
    newListItemButton.addEventListener("click", function() {// method for individual delete the event is happens on indivial delete button
        console.log(this);
        this.parentNode.remove();//remove selected element
    });

    
    myList.appendChild(newListItem); //add the newlistitem element into mylist 

    taskInput.value = ""; // and empty the input bar for get ready for next input

}

