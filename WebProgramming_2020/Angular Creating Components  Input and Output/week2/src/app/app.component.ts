import { Component } from '@angular/core';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'week2';
  //create array equal to a empty array
  //image url address name title, object orientied programming, build a class and descrip the informaiton about content
  //interate the content for able to display in array
  //convert the string here to contact, contact will be a class
  //open in integrated terminal- create contact class in contact folder
  //ng g class contact
  contacts: Contact[] = [
    new Contact("Bob", "Mx", "1 Queen Street, Melbs", "https://placehold.it/200x200" ),
    new Contact("Frank", "Mr", "2 Queen Street, Melbs", "https://placehold.it/200x200" ),
    new Contact("Jess", "Ms", "3 Queen Street, Melbs", "https://placehold.it/200x200" ),
    new Contact("George", "Mx", "4 Queen Street, Melbs", "https://placehold.it/200x200" ),
  ];

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
  

  showContacts: boolean =false;

  
  /**
  * method ! not oprator, the opposite of the value ture -> false
  * this.showcontacts=this.showcontacts==false
  * if(this,showcontacts == true)
  * {
  *   this.showcontacts = false;
  * }
  * else
  * {
  *   this.showcontacts = ture;
  * }
  */


  onToggleContacts()
  {
    this.showContacts = !this.showContacts;

  }
  
}
