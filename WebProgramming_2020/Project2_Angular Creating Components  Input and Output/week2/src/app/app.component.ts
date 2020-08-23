/**
  *
  */
import { Component } from '@angular/core';
import { Contact } from './contact/contact';
//derictive template syntax binding syntax all git work for angular 
//component decorator to define the class down there component
@Component({
  //what compoenet we going to display and what to use html file
  //selector is related to tag
  selector: 'app-root',
  templateUrl: './app.component.html',
  //css is total independent
  styleUrls: ['./app.component.css']
})

// !!appcomponent is never store component now it just simply referencing the service 
export class AppComponent
{
  title = 'week2';

  /**
  * total: number = 0;
  * onCounted(value: number)
  * {
  * 
  * }
  */

  
    //{
      //need define all attribute
      //name: "Bob",
      //address: "1 Queen Street, Melbs",
      //imageUrl: "https://placehold.it/200x200",
      //title: "Mx"

    //}
    //"Bob",
    //"Matt",
    //"Frank",
    //"Ben",
    //"Lachlan",
   // "Coryn"
  ];

  
  //display the vaule depand on boolean
  //can be remove now new code in service
  //showContacts: boolean =false;

  
  

  // !!mutiple line comment crtl + /
  // onToggleContacts()
  // {
  //   /**
  // * method ! not oprator, the opposite of the value ture -> false
  // * this.showcontacts=this.showcontacts==false
  // * if(this,showcontacts == true)
  // * {
  // *   this.showcontacts = false;
  // * }
  // * else
  // * {
  // *   this.showcontacts = ture;
  // * }
  // */
  //   this.showContacts = !this.showContacts;

  // }
  
}
