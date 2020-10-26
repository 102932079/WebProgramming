//This component will show the planet, and how far away it is from the sun.
//However your detail component must have at least 1 @Input (the planet)
import { Component, OnInit, Input } from '@angular/core';
//import class and service
import { PlanetService } from '../Service/planet.service'
import { Planet } from '../planet'

@Component
({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit 
{

  //input
  @Input()
  planet: Planet;

  //stroing data

  editing: boolean = false;
  placeholder: string = '';
  moonHolder: number;
  distHolder: number;
  editingfield: string;

  constructor(public planetService: PlanetService) 
  { 

  }

  ngOnInit(): void 
  {
  }

  selectName()
  {
    this.editingfield = "name";
    this.editing = true;
    this.placeholder = this.planet.name;
  }

  selectMoons()
  {
    let moons = 0;
    this.editing = true;
    moons = this.planet.moons;
    this.placeholder = moons.toString();
  }

  selectDist()
  {
    let dist = 0;
    this.editing = true;
    dist = this.planet.distancefromSun;
    this.placeholder = dist.toString();
  }

  beginEdit()
  {
    this.editing = true;
  }

  stopEdit(value: string)
  {
    if(this.editingfield == "name")
    {
      this.planet.name = this.placeholder;
    }
    else
    {
      this.editing = false;

    }
  }

  deletePlanet(planet: Planet)
  {
    this.planetService.deletePlanet(planet);
  }

  // updatePlanetName($event: Event)
  // {
  //   // htmlinputelement target value
  //   this.planet.name = ((<HTMLInputElement>)event.target).value);
  // }

  // updatePlanetMoons($event: Event)
  // {
  //   var Input = parseInt((<HTMLInputElement>)event.target).value);
  //   this.planet.moons = input;
  // }

  // updatePlanetDist($event: Event)
  // {
  //   var Input = parseInt((<HTMLInputElement>)event.target).value);
  //   this.planet.distancefromSun = input;
  // }



}
