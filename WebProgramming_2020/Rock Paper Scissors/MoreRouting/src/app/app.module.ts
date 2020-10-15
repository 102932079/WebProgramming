import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// app routing module as well
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //when creating project routing by default
    //the app.module.ts appeals which import app routing module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
