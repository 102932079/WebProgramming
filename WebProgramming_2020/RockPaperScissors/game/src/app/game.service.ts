//service used by different component
//import injectable from core Decorator that marks a class as available to be provided and injected as a dependency.
import { Injectable } from '@angular/core';
//import of and delay function see "more routing"
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';
//import router service
import {Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  //game result (draw?)
  result: 'Win' | 'Lose';
  //? null , comp wont choose null , adding _ for not dulplicate with get, make variable private for not let user access it
  private _playerSelection?: 'rock' | 'paper' | 'scissors';
  private _compSelection: 'rock' | 'paper' | 'scissors';

  //get and set property like c#, selection variable is public
  get playerSelection(){
    return this._playerSelection;
  }

  get compSelection(){
    return this._playerSelection;
  }

  //import the router service
  constructor(private router: Router ) { }

  //create a method and variable to store data locally 
  selectedOption(option: 'rock' | 'paper' | 'scissors')
  {
    this._playerSelection = option;
  }
  
  //we want to call method after comitselection
  comitplayerSelection(){
    //add delay for routing service(most easy way) 1000ms=1sec
    of(null).pipe(delay(1000)).subscribe(() => {
      if(this._playerSelection == null){
        alert('No option was seleceted!')
      }
      //call router and navigate to results component(routing)
      this.router.navigateByUrl('/results');
    });
  }

  //play again method and navigate to play component
  playAgain(){
    of(null).pipe(delay(1000)).subscribe(() => {
      this.router.navigateByUrl('/play');
    });
    this._playerSelection = null;
  }

  fromStorage(){
    if(this._playerSelection === undefined ){
      if(localStorage.getItem('playerSelection') != null){
        this._playerSelection = JSON.parse(localStorage.getItem('playerSelection'));
      }
    }
  }


}
