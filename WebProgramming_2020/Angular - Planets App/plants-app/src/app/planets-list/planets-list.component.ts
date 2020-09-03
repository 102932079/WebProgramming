//This component will show on 'planet-detail' components for every planet as part of the service (to come).
//The Create and List components MUST not have any @Inputs or @Outputs.
import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../Service/planet.service'
import { PlanetDetailComponet } from

@Component
({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit 
{

  planetService: PlanetService;

  constructor(public planetservice: PlanetService)
  { 
    this.planetService = planetservice;
  }

  ngOnInit(): void {
  }

}
