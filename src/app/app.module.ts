import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HomeComponent} from './app.components.component.home';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,HomeComponent],
  bootstrap:    [ AppComponent, HomeComponent],
})
export class AppModule { }
