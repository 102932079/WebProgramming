// crtl + c to stop watching 
// function showTodo(todo: {title: string, text: string}) // create variable for parameter
// {
//     console.log(todo.title + ': ' + todo.text);
// }

// let myTodo = {title: 'Trash', text: 'take out trash'} // create variable for value

// showTodo(myTodo);

interface Todo{ // creating you own type
    title: string;
    text: string;
}

function showTodo(todo: Todo) // custom type of todo
{
    console.log(todo.title + ': ' + todo.text);
}

let myTodo = {title: 'Trash', text: 'take out trash'} 

showTodo(myTodo);