// crtl + c to stop watching 
// function showTodo(todo: {title: string, text: string}) // create variable for parameter
// {
//     console.log(todo.title + ': ' + todo.text);
// }
function showTodo(todo) {
    console.log(todo.title + ': ' + todo.text);
}
var myTodo = { title: 'Trash', text: 'take out trash' };
showTodo(myTodo);
