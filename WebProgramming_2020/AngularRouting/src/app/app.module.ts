import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router


import { AppComponent } from './app.component';
//import { RouterModule } from '@angular/router';
import { CatComponent } from './routes/cat/cat.component';
import { DogComponent } from './routes/dog/dog.component';

const routes: Routes = [
  { path: "cats", component: CatComponent },
  { path: "dogs/:breed", component: DogComponent } 
  // instead questionmark we can use this
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // import this (create variable above)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
