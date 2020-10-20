// <!-- http request made in angualr http client-->
// <!-- enable http servies -->
// <!-- import from module and add into application -->
// <!-- giving access to http clinet -->
// import this first
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  //add HttpClientModule here
  imports: [
    BrowserModule
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
