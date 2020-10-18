import { Component, OnInit } from '@angular/core';
import { ColourService } from "../../colour.service";
// also import service here .. means go back(go up)

import { Router } from '@angular/router';

@Component({
  selector: 'app-colour-picker',
  templateUrl: './colour-picker.component.html',
  styleUrls: ['./colour-picker.component.css']
})
export class ColourPickerComponent implements OnInit {
// import the service
  constructor(private colourService: ColourService) { }

  ngOnInit(): void {
  }

  //define method selectoption for click event can be string in parameter
  selectOption(option: 'red' | 'blue'){
    //when we selected this element we want to do sth with it we want to store data the choice of the colour
    //access colour service
    //the selction is provided in the option value
    //commit here is when we commit a colour and saved it then goes to other component 
    //this the navgation method without using a link
    this.colourService.commitSelection(option);
  }

}
