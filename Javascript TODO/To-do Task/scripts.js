// `create public variable for all the element exist and to be used later
// const don't change let will change
// +let stored in memory const wont
const myForm = document.getElementById("myForm");
const myList = document.getElementById("myList");
const taskInput = document.getElementById("taskInput");
const myClearButton = document.getElementById("myClearButton");

//The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
//`define delete all button
myClearButton.addEventListener("click", function() { //`Attach a click event to a <button> element with function()method
    myList.innerHTML = ""; // +empty content like reset instead of using removechild
});


//the submit function / form submit / button click
//`define the main button function, form has two parts input and submit button
myForm.onsubmit = function(event) {//The onsubmit attribute fires when a form is submitted.

    //+event here only used once, as patsies is to be crated in the there and ref later for perventDefault method
    event.preventDefault();//  to stop the form actually submitting The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

    // var(globally scope, less used), let , const (more commonly  used , let and const have a block-level scope)
    //The createElement() method creates an Element Node with the specified name.
    //`create variable for the element list (li,ul) and the new element package contain 3 parts /text-node /tick-box and /remove-button
    var newListItem = document.createElement("li"); // create new element variable for li under ul

    // createTextNode() Method HTML elements often consists of both an element node and a text node.To create a header (e.g. <h1>), you must create both an <h1> element and a text node:
    //need to create variable for element and then create variable for content and pass the content into the element innerhtml
    //`pass the input bar value into new list element as innerHTML
    newListItem.innerHTML = taskInput.value; // new li is the value we put in input
    // create new li element and pass input value in this list
    //`create the variable for tic-kbox
    var newListItemCheckbox = document.createElement("input"); // create mew element tick box
    //`define this tick-box
    newListItemCheckbox.setAttribute("type", "checkbox"); //The setAttribute() method adds the specified attribute to an element, and gives it the specified value.    If the specified attribute already exists, only the value is set/changed.
    // type and checkbox are the different css style sheet with set attribute change the newlisttitemcheckbox element css ref from type to checkbox
    //`append the tick-box into the new element package
    newListItem.appendChild(newListItemCheckbox); //The appendChild() method appends a node as the last child of a node.
    //add the tick box into the newlistitem
    //`define the tick-box function to give the effect of changing color 
    newListItemCheckbox.addEventListener("change", function(){ //the method for the box is ticked or not ticked effect
        //`create new attribute for tick-box(input) of change and use condition logic to manipulate color
        console.log(this);// this key word
        if(this.checked){
            this.parentNode.style.background = "green"; // change css when event happens
        }else{
            this.parentNode.style.background = "white"; // change css when event happens
        }
        
    })
    //`create variable for delete button
    //lastElementChild firstElementChild children[1]array
    var newListItemButton = document.createElement("button"); // create new delete button for individual list item 
    //`define the delete button text as delete
    newListItemButton.innerHTML = "Delete"; // change the text of the delete button to delete
    //`add this button element to the package
    newListItem.appendChild(newListItemButton); // add the delete button into newlistitem same with tickbox
    //`define the delete button function
    newListItemButton.addEventListener("click", function() {// method for individual delete the event is happens on individual delete button
        console.log(this);
        this.parentNode.remove();//remove selected element
    });

    //+ my-list is the display area (ul) the container of the li element
    //`add the package(li element) to display zone(ul element)
    myList.appendChild(newListItem); //add the newlistitem element into mylist 
    //`set input bar value to empty as clean it for next input cycle
    taskInput.value = ""; // and empty the input bar for get ready for next input

}

