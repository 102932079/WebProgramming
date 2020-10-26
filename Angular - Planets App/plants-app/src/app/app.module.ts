//import for planetservice
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PlanetService } from './Service/planet.service'

import { AppComponent } from './app.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetsCreateComponent } from './planets-create/planets-create.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsListComponent,
    PlanetsCreateComponent,
    PlanetDetailComponent
  ],
  
  imports: [
    BrowserModule
  ],
  //planetservice
  providers: [PlanetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
