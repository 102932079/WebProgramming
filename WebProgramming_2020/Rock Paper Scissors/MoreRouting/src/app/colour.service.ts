import { Injectable } from '@angular/core';
// this service will be used by different component and store data

//import the delay function
import {delay} from 'rxjs/operators';

//import router service
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// we dont care about this error
export class ColourService {

  // define a private variable the reason is private is we dont want people just access the variable 
  //we want people to call the method first commitselection
  //null can be define as ?
  //_selection this variable is private
  private _selection?: 'red' | 'blue';

  //get and set property like in c# (syntax for c# very similar)
  //beacuse we got the selection same name as duplicate we need to change one of them by adding _ make it unique variable name
  //this selection variable is public
  get selection(){
    return this.selection;
  }

  //importing the route service
  constructor(private router: Router ) { }
  //means we got this private variable define by constructor who access router define by type

  //create a method and store data locally
  //make http request into the component dirctry
  //make a http request in the service

  //define commitselection
  commitSelection(option: 'red' | 'blue'){
    
    //we also can add some kind of delay here for router
    //this is the most easy way for using the delay function there is other way just need to import of and delay function
    of(null).pipe(delay(3000)).subscribe(() =>{
      //1000 = 1sec
      //move the get element action inside of delay method

      //commiting this selection and save it into this variable
      this._selection = option;
      //next step is routing this into the display component
      //this can work but we want to reload the page
      //window.location.href = "certain url" beacuse the service wont be accessing the selection any more
      //the solution is we are going to accessing the router and and told the router we need to navgate
      //this is done by importing the route service

      //inhere we are going to call the router and define how to navigate
      this.router.navigateByUrl("/display");
      //can call after http

    })

    

  }
}
