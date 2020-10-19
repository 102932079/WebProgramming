//ViewChild Property decorator that configures a view query.
import { Component, OnInit, ViewChild } from '@angular/core';
//import service
import { GameService } from 'src/app/game.service';




@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  //define class
  rockSelected: boolean = false;
  paperSelected: boolean = false;
  scissorsSelected: boolean = false;

  constructor(private gameservice: GameService) { }
  //A callback method that is invoked immediately after the default change detector has checked the directive's data-bound properties for the first time, and before any of the view or content children have been checked. It is invoked only once when the directive is instantiated.
  ngOnInit(): void {
  }

  //define wining condition for each possibiliy 3
  //accessing the game service, seleciton is the provided in the option value
  optionClicked(option: 'rock' | 'paper' | 'scissors'){
    if(option == 'rock'){
      this.rockSelected = this.rockSelected? false : true;

      this.paperSelected = false;
      this.scissorsSelected = false;

    }else if(option == 'paper'){
      this.paperSelected = this.paperSelected? false : true;

      this.rockSelected = false;
      this.scissorsSelected = false;
    }else{
      this.scissorsSelected = this.scissorsSelected? false : true;
      
      this.rockSelected = false;
      this.paperSelected = false;
    }
    //selectedoption here is when we commit a choice and then goes to the other component
    //this is the navigation method without using a link
    this.gameservice.selectedOption(option);
  }

  //the null option
  buttonClicked(){
    if (this.gameservice.playerSelection == null ){
      alert('No option was selected!');
      return;
    }
    this.gameservice.comitplayerSelection();
    //JSON.stringify A common use of JSON is to exchange data to/from a web server.When sending data to a web server, the data has to be a string.Convert a JavaScript object into a string with JSON.stringify().
    localStorage.setItem('playerSelection', JSON.stringify(this.gameservice.playerSelection));
  }

}
