import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HomeComponent} from './app.components.component.home';
import {ProductList} from './app.component.productList';
import {FormsModule} from '@angular/forms';
import {ConvertToSpacePipe} from './app.component.pipes.space.transform';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule],
  declarations: [ AppComponent,HomeComponent,ProductList,ConvertToSpacePipe],
  bootstrap:    [ AppComponent, HomeComponent,ProductList],
})
export class AppModule { }