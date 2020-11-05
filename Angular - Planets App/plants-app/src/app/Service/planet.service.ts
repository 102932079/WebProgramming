// ng g service planet
// Add a planet service, that stores planets. With the ability to add a planet, and sort them by distance from the sun.Implement this service into your list and create components when you create them.
import { Injectable } from '@angular/core';
//class
import { Planet } from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  //create planet list and fill in the list
  planets: Planet[] = 
  [
    new Planet ("Mercury", 0, 120, "../../assets/Mercury.png"),
    new Planet ("Earth", 1, 300, "../../assets/Earth.png"),
    new Planet ("Mars", 0, 500, "../../assets/Mars.png"),
    new Planet ("Jupiter", 0, 620, "../../assets/Jupiter.png")
  ]

  constructor() { }

  //method 3 add sort delete

  // sortPlanets()
  // //sort -1 1
  // {
  //   this.planets.sort((a, b) => (a.distancefromSun < b.distancefromSun) ? -1:1);
  // }

  pulbic addPlanet(planet: Planet)
  //push
  {
    this.planets.push(planet);
    //sort 2
    //this.planets.sort((a, b) => (a.distancefromSun < b.distancefromSun) ? -1:1);
  }

  // deletePlanet(planet: Planet)
  // {
  //   //let
  //   let thisPlanettoRemove = this.planets.indexOf(planet)
  //   //splice splice(start: number, deleteCount?: number): Planet[]
  //   this.planets.splice(thisPlanettoRemove, 1)
  // }
}
