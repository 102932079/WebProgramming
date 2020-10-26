import { Component, Input, OnInit } from '@angular/core';
//import class
import { Contact } from './contact';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent {
  //concept of inputs outputs properties
  //Use the @Input() decorator in a child component or directive to let Angular know that a property in that component can receive its value from its parent component. It helps to remember that the data flow is from the perspective of the child component. So an @Input() allows data to be input into the child component from the parent component.
  @Input()
  contact : Contact;

  constructor() { }

  //ngOnInit(): void {  }

  getUrl(){
    return this.contact.ImgUrl;
  }

}
