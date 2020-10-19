import { Component, OnInit } from '@angular/core';
//import router and service
import { Router } from '@angular/router';
import { GameService } from 'src/app/game.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(public gameService: GameService, private router: Router) { }

  ngOnInit(): void {
    if(this.gameService.playerSelection == null){
      //both " ' is ok inthis.router.navigateByUrl jump for empty page
      this.router.navigateByUrl("/play");
    }
  }

}
