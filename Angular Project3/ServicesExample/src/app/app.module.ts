import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { DummyComponent } from './dummy/dummy.component';
import { Dummy2Component } from './dummy2/dummy2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DummyComponent,
    Dummy2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
