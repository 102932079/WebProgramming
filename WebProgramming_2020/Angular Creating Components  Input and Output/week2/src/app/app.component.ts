import { Component } from '@angular/core';

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
  contacts:string[] = [
    "Bob",
    "Matt",
    "Frank",
    "Ben",
    "Lachlan",
    "Coryn"
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
