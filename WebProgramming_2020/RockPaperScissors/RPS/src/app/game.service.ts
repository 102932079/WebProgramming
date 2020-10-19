//import router and some extra function
//service used by different component
//import injectable from core Decorator that marks a class as available to be provided and injected as a dependency.
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  //define comp choice , create a string array

  compChoice: string[] = ['rock', 'paper', 'scissors'];
  _compSelection: string;

  //define player choice and result
  //adding _ for not dulplicate with get, make variable private for not let user access it
  private _playerSelection: 'rock' | 'paper' | 'scissors' | null;
  private _result: 'win' | 'lose' | 'draw' | null;

  //get and set property like c#, selection variable is public
  get playerSelection(){
    return this._playerSelection;
  }

  get compSelection(){
    return this._compSelection;
  }

  get result(){
    return this._result;
  }

  //import the router service
  constructor(private router: Router) { 
    // https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
  }

  //create a method and variable to store data locally 
  //we want to call method after comitselection
  commitSelection(option: 'rock' | 'paper' | 'scissors'){
    //the null here will be replaced by the get() request to the endpoint
    //add delay for routing service(most easy way) 1000ms=1sec
    of(null).pipe(delay(1000)).subscribe(() => {
      //this stores the selction being pushed over from the component into the variable above
      this._playerSelection = option;
      this._compSelection = this.compChoice[(Math.random() * this.compChoice.length) | 0];
      this.checkingResult();
      //call router and navigate to results component(routing)
      this.router.navigateByUrl("/result");
      //add a condition that none selected
      if(this._playerSelection == null){
        alert('No option was seleceted!')
      }
    })
  }
  //define winning condition , apart from draw there are 3 possibility
  //The question mark ? and : is an alternative to an if statement best used in the case where one of two values will be assigned to a variable based on a conditional statement.
  checkingResult(){
    if(this._compSelection == this._playerSelection){
      this._result = 'draw';
    }
    else if(this._playerSelection === 'rock'){
      this._compSelection === 'paper' ? this._result = 'lose' : this._result = 'win';
    }
    else if(this._playerSelection === 'paper'){
      this._compSelection === 'scissors' ? this._result = 'lose' : this._result = 'win';
    }
    else if(this._playerSelection === 'scissors'){
      this._compSelection === 'rock' ? this._result = 'lose' : this._result = 'win';
    }
  }

  //play again method and navigate to play component for new game button in result page
  playAgain(){
    of(null).pipe(delay(1000)).subscribe(() =>{
      this.router.navigateByUrl('/play');
    });
    //And reset the playerselection to null
    this._playerSelection = null;
  }

}
