//"use strict";
//console.log("Hello World");

//new conspct from ts If the veriable can be null we need to check it not null before doing anything
let myButton = document.getElementById("myButton") as HTMLButtonElement | null;
//HTMLElement dont have value only ButtonElement or FormElement has the value

if(myButton == null){
    alert("Button not found.")
}else{
    //myButton.value
    myButton.onclick = function(){//myButton? //beacuse we checked the null so the error is gone
        if(myButton == null) return;// always think about the conditon with null check it
        alert(myButton?.value);// undefined
    }
}

