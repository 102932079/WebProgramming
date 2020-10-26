import { Component, OnInit } from '@angular/core';

import { ContactsService } from "../services/contacts.service"
// there is an extension called importer sth will help to tidy up the import format

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
// the service have not not  been inputted yet
// see below for importing contact serviece 
export class ContactListComponent implements OnInit {
  // name of the variable and from that type 

  constructor( public contactsService: ContactsService ) { }

  ngOnInit(): void {
  }

}

// using the value of service to display them

// only one angular applicaton allow to run at same time
