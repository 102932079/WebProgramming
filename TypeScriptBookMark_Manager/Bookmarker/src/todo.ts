export class Todo { // allow the class here to be use else where, just import in other ts
    title: string;
    completed: boolean = false;//set up default values

    constructor(pTitle: string){ 
        // the constructor allow us to excute code before we running into the method , so the constructor is called when every we craete a variable, similier with csharp
        // when use class in ts must with key word this, beacuse has to refer to this instance
        this.title = pTitle;
    }
}

export class TodoElement { // group up the method as a element
    todo: Todo;
    element: HTMLElement | null = null; // text
    private root: HTMLElement | null = null;

    constructor(pTodo: Todo){
        this.todo = pTodo;
    }

    private deleteClicked(){//get parent
        if(this.element == null || this.root == null ) return;
        this.root?.removeChild(this.element); //remove child is not functional
        //this.element?.parentElement?.removeChild(this.element); // somehow parent element not working
        
    }

    spawn(root: HTMLElement) { //id: string
        this.element = document.createElement("div"); // text -> create text node / elemnt -> create element

        // add both element for demo later
        this.element.appendChild(document.createTextNode(this.todo.title))

        // also add a line breaker
        this.element.appendChild(document.createElement("br"))
        this.element.appendChild(document.createTextNode(this.todo.completed ? "True" : "False"))

        //also generate the button for each text node that spawned
        let button = document.createElement("button");
        button.appendChild(document.createTextNode("Delete"));
        button.onclick = () => this.deleteClicked; // anynomas function // beacuse it is in the class
        //button.onclick = function() {this.deletedClicked()};
        root.appendChild(this.element); // document.getElementById(id)?

    }

    // delete(root: HTMLElement) {
    //     if(this.element == null) return;
    //     root.removeChild(this.element);//check null
    // }

    // update() {

    // }
}