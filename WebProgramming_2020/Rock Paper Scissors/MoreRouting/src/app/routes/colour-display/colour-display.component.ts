import { Component, OnInit } from '@angular/core';
import { ColourService } from 'src/app/colour.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colour-display',
  templateUrl: './colour-display.component.html',
  styleUrls: ['./colour-display.component.css']
})
export class ColourDisplayComponent implements OnInit {

  //import the service and make it public beacuse want the component able to access the service
  //not only the class able to access the service allow all component to access it
  //property on this service
  //import 
  constructor(public colourService: ColourService, private router: Router) { }

  
  ngOnInit(): void {
    //toggle the colour service and the public variable selection
    //this.colourService.selection

    //here to define router does auto return function
    //!= does not equal to 
    //if the public variable selection equal to null then navigate the router to pick
    if(this.colourService.selection == null){
      this.router.navigateByUrl("/pick")
      //got lots thing in dot menu could discovery more
    }
  }

}
