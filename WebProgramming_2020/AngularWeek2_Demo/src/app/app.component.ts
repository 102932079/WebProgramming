import { Component } from '@angular/core';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Week2';
  
  contacts: Contact[] = [
    new Contact("Bob", "Mx", "1 Queen Street, Melbs", "https://placehold.it/200x200"),
    new Contact("Frank", "Mr", "2 Queen Street, Melbs", "https://placehold.it/200x200"),
    new Contact("Jess", "Ms", "3 Queen Street, Melbs", "https://placehold.it/200x200"),
    new Contact("George", "Mx", "4 Queen Street, Melbs", "https://placehold.it/200x200"),
  ];


showContacts: boolean = true;

onToggleContacts() {
  // if(this.showContacts == true){
  //   this.showContacts = false;
  // }else {
  //   this.showContacts = true;
  // }
  this.showContacts = !this.showContacts;
}
  
}
