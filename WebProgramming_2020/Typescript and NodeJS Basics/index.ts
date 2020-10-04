// Create and setup your first typescript project in  a new folder of your WebProgramming GitHub repository.

// Try your best to convert your previous TodoApplication submersion, into typescript, with proper typing on all variables used.

// Once complete, please submit a link to your GitHub repository.

//tsc index.ts -w

// Interface HTMLFormElement element in the DOM; it allows access to and in some cases modification of aspects of the form, as well as access to its component elements.
// create varible for button and input element
let input = document.getElementById("input") as HTMLFormElement | null;
let button = document.getElementById("button") as HTMLFormElement | null;

// define button exist or not
if (button === null) // not exist
{
    window.alert("Button not found!")
}
else // do exist
{
    // define button click behaiver
    button.onclick = function()
    {
        // variable for p element array of the content
        let newElement = document.createElement("p");
        if (input === null) // input and null same type
        {
            // input content not exist
            window.alert("Input value not found!");
        }
        else
        {
            // create new eleement and give new variable
            let content = document.createTextNode(input.value);
            // pass contenct into array of the p 
            newElement.appendChild(content);
        }

        // new element for array display area
        // create variable box
        let Box = document.getElementById("d2");
        if (Box === null)
        {
            return;
        }
        else
        {
            // append newelement to the bottom of the box
            Box.appendChild(newElement);
        }
        //empty the input bar
        if (input == null)
        {
            return;
        }
        else
        {
            input.value = "";
        }
        // click on the text to remove the text row
        newElement.onclick = function ()
        {
            newElement.remove();
        }
    }
    
}