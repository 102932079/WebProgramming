import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColourDisplayComponent } from './routes/colour-display/colour-display.component';
import { ColourPickerComponent } from './routes/colour-picker/colour-picker.component';

// this is where you app will be defined
// deploy routes and define how we can access the routes in app-routing.module.ts using url as array
//
const routes: Routes = [
  // dynamic object
  { path: "pick", component: ColourPickerComponent },
  { path: "display", component: ColourDisplayComponent},

  // define another route here ** patrol routes
  { path: "**", redirectTo: "pick" }
  // if we going to the home page of patrol it will automatically redirectto pickcolour
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


