// ng g service planet
// Add a planet service, that stores planets. With the ability to add a planet, and sort them by distance from the sun.Implement this service into your list and create components when you create them.
import { Injectable } from '@angular/core';
//class
import { Planet } from '../planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  //create planet list and fill in the list
  planets: Planet[] = 
  [
    new Planet ("Sun", 0, 0),
    new Planet ("Mercury", 0, 57.9),
    new Planet ("Venus", 0, 108.2),
    new Planet ("Earth", 0, 149.6),
    new Planet ("Mars", 0, 227.9),
    new Planet ("Jupiter", 0, 778.3),
    new Planet ("Saturn", 0, 1427.0),
    new Planet ("Uranus", 0, 2871.0),
    new Planet ("Neptune", 0, 4497.1),
    new Planet ("Pluto", 0, 5913.0),
  ]

  constructor() { }

  //method 3 add sort delete

  sortPlanets()
  //sort -1 1
  {
    this.planets.sort((a, b) => (a.distancefromSun < b.distancefromSun) ? -1:1);
  }

  creatPlanet(planet: Planet)
  //push
  {
    this.planets.push(planet);
    //sort 2
    this.planets.sort((a, b) => (a.distancefromSun < b.distancefromSun) ? -1:1);
  }

  deletePlanet(planet: Planet)
  {
    //let
    let thisPlanettoRemove = this.planets.indexOf(planet)
    //splice splice(start: number, deleteCount?: number): Planet[]
    this.planets.splice(thisPlanettoRemove, 1)
  }
}
