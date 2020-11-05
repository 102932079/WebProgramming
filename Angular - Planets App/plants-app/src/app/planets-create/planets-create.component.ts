//This component will be separate to the planets-list and planets-detail component. It will allow you to create a planet and set its distance from the sun.
//The Create and List components MUST not have any @Inputs or @Outputs.
import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../Service/planet.service';
import { Planet } from '../models/planet'

@Component({
  selector: 'app-planets-create',
  templateUrl: './planets-create.component.html',
  styleUrls: ['./planets-create.component.css']
})
export class PlanetsCreateComponent implements OnInit {

  constructor(public planetService: PlanetService) 
  { 

  }

  ngOnInit(): void
  {
  }

  createPlanet(name: string, moons: number, distToSun: number)
{
  this.planetService.creatPlanet(new Planet(name, moons, distToSun))
}

}
