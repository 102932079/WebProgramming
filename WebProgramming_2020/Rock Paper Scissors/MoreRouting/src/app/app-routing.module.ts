import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// this is where you app will be defined
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
