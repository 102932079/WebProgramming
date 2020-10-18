import { Injectable } from '@angular/core';
//import with contact(class)
import { Contact } from './contact-component/contact.ts';

@Injectable({
  providedIn: 'root'
})

export class ContactsService {

  //constructor() { }
  contact : Contact[] = [
    new Contact
  ]
}
