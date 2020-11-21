//`define variable
const input = document.querySelector("input");
const select = document.querySelector("select");

///<div class="box" name="box1"></div>
///<div class="box" name="box2"></div>
///<div class="box" name="box3"></div>

///$('.box').on('click', function(){
///    var value = $(this).attr('name');
///  alert(value);
///}); 
//!the add() is not working it may related to div value issue

//`define add() function
function Add()
{
    //`create variables for package new element 
    let newDiv = document.getElementById("div");//+div
    let newP = document.getElementById("p");//+p
    //`create variable pass in the value to this variable
    let content = document.createTextNode(input.value);
    //`pass variable to p
    newP.appendChild(content);

    //`create variable for input and turn it to check box
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");

    //`create variable for button and give it text of delete 
    let newButton = document.createElement("button");
    newButton.innerHTML = "Delete";


    //`assemble all new created element together as package and ready for sent to certain display div later
    newDiv.appendChild(newP);
    newDiv.appendChild(checkBox);
    newDiv.appendChild(newButton);


    //`define selection scroll bar
    if (select.value === "Shopping List")
    {
        //toggle div1 and add newdiv to div1
        let div1 = document.getElementById("div1");
        div1.appendChild(newDiv);
    }

    else if (select.value === "Assignments to do")
    {
        //toggle div2 and add newdiv to div2
        let div2 = document.getElementById("div2");
        div2.appendChild(newDiv);
    }

    else (select.value === "Place to go")
    {
        //toggle div3 and add newdiv to div3
        let div3 = document.getElementById("div3");
        div3.appendChild(newDiv);
    }

    //`reset input bar for next input
    input.value = " ";

    //`define the individual delete 
    newButton.addEventListener("click", function() {
        console.log(this);
        this.parentNode.remove();
    });

    //`define the checkbox effect
    checkBox.addEventListener("change", function(){        
        console.log(this);
        if(this.checked){
            this.parentNode.style.background = "green";
        }else{
            this.parentNode.style.background = "white"; 
        }
    });

    // `delete all function (all p element)

    function DeleteAll()
    {
        var allP = document.querySelectorAll("p");
        //the first parameter will be the iterator or the variable, use semi column to separate this, next going to be the condition, the last part will be the increment(add 1 to this variable)

        for (let i = 0; i < allP.length; i++) // length of the string? count?
        {
            allP[i].remove();
        }
    }

}
        