import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HomeComponent} from './app.components.component.home';
import {ProductList} from './app.component.productList';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent,HomeComponent,ProductList],
  bootstrap:    [ AppComponent, HomeComponent,ProductList],
})
export class AppModule { }
