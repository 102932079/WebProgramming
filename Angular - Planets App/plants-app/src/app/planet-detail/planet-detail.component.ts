//This component will show the planet, and how far away it is from the sun.
//However your detail component must have at least 1 @Input (the planet)
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
//import class and service
import { PlanetService } from '../Service/planet.service';
import { Planet } from '../models/planet';
import { PlanetsCreateComponent } from '../planets-create/planets-create.component';

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
  planetEditing: Planet;//ngIf
  //set default
  clicked: boolean = false;
  currentPlanet: number;
  editing: boolean = false;
  submitted: boolean = false;
  hasMoon: boolean = false;

  //stroing data

  // editing: boolean = false;
  // placeholder: string = '';
  // moonHolder: number;
  // distHolder: number;
  // editingfield: string;

  //ctor
  constructor(public planetService: PlanetService) { }

  ngOnInit(): void 
  {
    if (this.planet.Moons != 0){
      this.hasMoon = true;
    }
  }
  //method

  public getImage(){//recall from service
    return this.planet.Image;
  }

  public getImgMarginLeft(){
    return this.planet.DistanceFromTheSun;
  }

  public planetClicked(){//switching selected status
    if (this.clicked == true){
      this.clicked = false;
    }else{
      this.clicked = true;
    }
    // this.clicked != this.clicked;
    this.currentPlanet = this.planetService.planets.indexOf(this.planet);
  }

  public deletePlanet()
  {
    this.planetService.planets.splice(this.currentPlanet, 1);//splice() Add items to the array:
  }

  public editPlanet(planetNum: number){
    this.editing = true;
    this.submitted = false;
    this.planetEditing = { ...this.planet };
  }

  public onSubmit(){
    this.submitted = true;
    this.editing = false;
    Object.assign(this.planet, this.planetEditing);
  }
  
  // get diagnostic() { 
  //   return JSON.stringify(this.planet); 
  // } 
  //returns the object and its details in a string form

  showFormControls(form: any){
    return form && form.controls['name'] && form.controls['name'].value;
  }



  
  // selectName()
  // {
  //   this.editingfield = "name";
  //   this.editing = true;
  //   this.placeholder = this.planet.name;
  // }

  // selectMoons()
  // {
  //   let moons = 0;
  //   this.editing = true;
  //   moons = this.planet.moons;
  //   this.placeholder = moons.toString();
  // }

  // selectDist()
  // {
  //   let dist = 0;
  //   this.editing = true;
  //   dist = this.planet.distancefromSun;
  //   this.placeholder = dist.toString();
  // }

  // beginEdit()
  // {
  //   this.editing = true;
  // }

  // stopEdit(value: string)
  // {
  //   if(this.editingfield == "name")
  //   {
  //     this.planet.name = this.placeholder;
  //   }
  //   else
  //   {
  //     this.editing = false;

  //   }
  // }

  // deletePlanet(planet: Planet)
  // {
  //   this.planetService.deletePlanet(planet);
  // }

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
