import { typeSourceSpan } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { TimeoutError } from 'rxjs';
//import with contact(class) no need .ts
import { Contact } from './contact-component/contact';

@Injectable({
  providedIn: 'root'
})

export class ContactsService {

  // insert contact as array(list)
  contact : Contact[] = [
    new Contact("Mr", "Name1", "Address1", "url('assets/user.png')"), 
    new Contact("Mr", "Name2", "Address2", "url('assets/user.png')"), 
    new Contact("Mr", "Name3", "Address3", "url('assets/user.png')"), 
    new Contact("Mr", "Name4", "Address4", "url('assets/user.png')"), 
  ];
  showContacts: boolean = true;
  constructor() { }
}
