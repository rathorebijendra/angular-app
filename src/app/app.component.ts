import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1 *ngIf = 'app'>Hello {{name}}</h1>`,
})
export class AppComponent  { 
  name:string = 'Bhoopendra';
  app:boolean = false;
 }
