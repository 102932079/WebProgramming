import { Component, OnInit, Input } from '@angular/core';
//need crate this reference before affect, defalut for contact
import { Contact } from "./contact"
 // every componect has selector when we going to render and display in window


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit 
{
 
  //name = item decorated with a input
  
  //@Input() 
 // name: string; name in the contact class so no need here
// make contact into input
  @Input() 
  contact: Contact;

  constructor() { }

  ngOnInit(): void {
  }

}

  //Creates an instance of documenter.
 
