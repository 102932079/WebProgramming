import { Component } from '@angular/core';
//import class
import { Contact } from './contact-component/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //title = 'SimpleContact';
  //ngIf
  showContact : boolean = true;

  contact: string[] = ["Mr.", "Name5", "Address5"]

  //  onToggle() : void{
  //    this.showContacts = !this.showContacts;
  //  }
}
