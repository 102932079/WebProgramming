import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  // import the contactservice by adding them into the parameter

  constructor(public contactsService: ContactsService) { }

  ngOnInit(): void {
  }

  // input variable

  createContact(name: string)
  {
    if(name == "") 
    {
      alert("Woah dude, that was not cool, you must provide a name!")
      // how to under stand return here? an return means here.
      return;
    }
    // placehold is the service that genrerate the image for certain size
    this.contactsService.createContact(new Contact(name, "Mr", "3 Queen Street, CBD", "http://placehold.it/200x200"));
  }

}
