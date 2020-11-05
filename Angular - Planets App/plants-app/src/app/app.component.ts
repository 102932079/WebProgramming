import { Component } from '@angular/core';
import { from } from 'rxjs';
//import { PlanetService } from './Service/planet.service'
import { Planet } from './models/planet';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plants-app';
  public planetsSercie = PlanetService;

  constructor(planetService: PlanetService)
  {
    this.planetsSercie = PlanetService;
  }
}
