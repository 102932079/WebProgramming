// the service.ts file can be locate on root or any other component folder even you can create a service folder and stay alone
// make the service store the contact we have 
// !!! important !!!!standard comcept we need get used to angualr  our component manipulate information and a service store information
// moving data into service 
import { Injectable } from '@angular/core';
// manulay import the contact and define url path dir and file 
import { Contact } from "../contact/contact";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
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

  showContacts: boolean = true;


  constructor() { }

  // the method can allow us to manipulate array change us how is the handle

  // manipulate every thing in contact servie and use that in other component(from component it only display) (method )

  createContact( contact: Contact)
  {
    this.contacts.push(contact);

  }
}


// !!!!the nameing prienple of the component is the group element and then follow up will the action (funciton) of what that element can do

// service is just a class that you can have as many as method you want.