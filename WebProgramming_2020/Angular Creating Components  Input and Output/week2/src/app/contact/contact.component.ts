import { Component, OnInit, Input } from '@angular/core';

 // every componect has selector when we going to render and display in window


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit 
{
 
  //name = item decorated with a input
  
  @Input() 
  name: string;

  constructor() { }

  ngOnInit(): void {
  }

}

  //Creates an instance of documenter.
 
