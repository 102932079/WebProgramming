// selecting things from dom
//console.log(window); // window object
//window.alert(1); // alert(1);

// single element selector
// console.log(document.getElementById('#my-form')); // <form id="my-from">
//const form = document.getElementById('#my-form'); // we even can assign this into variable
//console.log(form);

// console.log(document.querySelector('#my-form')); // jQuery libery that made easy to select other things than ids classese tags themselves 
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('h1')); // that how you tagert a element
// // beacuse this is a single elelment selector so it will only select the first one

// // multiple element selector
// console.log(document.querySelectorAll('.item')); //  will give a node list (array) each nodeList will have different object and properties
// console.log(document.getElementsByClassName('item')); // will get a html collection (generlly dont use these)
// console.log(document.getElementsByTagName('li')); // will get a html collection (generlly dont use these)

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));// looping through and grab each one

// dom means user interface
const ul = document.querySelector('.items');
ul.remove(); //  remove all the selected element
ul.lastElementChild.remove(); //remove the last element
ul.firstElementChild.textContent = 'Hello'; // change the text content
ul.children[1].innerText = 'Brad';// select the second element and change the text (string)it to brad children nodelist number 1 (is the 2nd one)
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// change style
const btn = document.querySelector('.btn');
btn.style.backgroud = 'red';

btn.addEventListener('click', (e) => {
    e.preventDefault(); //  to stop the form actually submitting
    console.log('click');
    console.log(e.target);// will get the element that evenet is on which is a button
    console.log(e.target.className); //  to get the class name (btn)
    document.querySelector('#my-form').style.backgroud = '#ccc'; //  the backgroud color will change after click the button
    // grab the body with the docuyment 
    document.querySelector('body').classList.add('bg-dark'); //  the capbiltiy for making your user interface interactive 
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
    //  we can get all sort of attritube for event we click
}); //  the first click is to choose the behiver ,the second things is to choose what to run()do when the click happen
    // event object

btn.addEventListener('mouseout', (e) =>
{
    document.querySelector('body').classList.add('bg-dark');// change sth when mouse hover over a element
});
// lot of event option check the dbm doucument
// grab things from dom and put into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);
function onsubmit(e)
{
    e.preventDefault();
    console.log(nameInput.value); // we dont need the element name we need the vaule so use .values to toggle vaule
    if(nameInput.value === '' || emailInput.value === '')
    {
        msg.classList.add('error'); //  add a error style (css to the please enter all fields text)
        //alert('Please enter fields'); // alert is ugly and stop your code do not use
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);//  the error message will stay forever we can use a settimeout funciotn and remove funciton to reset (remove error message)
        
    }
    else
    {
        //console.log('succes');
        // we want to display the list down to the dom
        const li = document.createElement('li'); // create a array called li
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`)); //  add the name and email to the li 
        userList.appendChild(li);// add the li to the array
        // clear the field after the li add to array
        nameInput.value = ''; // set to empty
        emailInput.value = '';
        // just ui after refesh it will go away wont saved anywhere
        // we need back end for the saving function
        // nodejs php python
        // connect to database 
        // fetch api ajax (web api)
        // local storage storeed in user browser
    }
}