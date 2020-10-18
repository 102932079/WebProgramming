import { Component, OnInit } from '@angular/core';
//import service
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {

  constructor(public ContactsService: ContactsService) { }

  ngOnInit(): void {
  }

}
