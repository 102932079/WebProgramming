//import router and some extra function
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
  private _playerSelection: 'rock' | 'paper' | 'scissors' | null;
  private _result: 'win' | 'lose' | 'draw' | null;

  get playerSelection(){
    return this._playerSelection;
  }

  get compSelection(){
    return this._compSelection;
  }

  get result

  constructor() { }
}
