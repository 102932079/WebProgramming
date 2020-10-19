import { Component, OnInit } from '@angular/core';
//hostlistener Decorator that declares a DOM event to listen for, and provides a handler method to run when that event occurs.
//import service and router
import { Router } from '@angular/router';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  nameOfClass: string;

  //create variable for gameservice and variable for router
  constructor(private game: GameService, private router: Router) { }

  ngOnInit(): void {
    //draw data out from local stroage and convert to json to webservice
    this.game.fromStorage();
    this.nameOfClass = this.game.playerSelection;
    //print out the playerselection
    console.log(' game selection: ' + this.nameOfClass);
  }

  //recall the playagain method pass into the new tryagain method
  tryAgain()
  {
    this.game.playAgain();
  }

}
